from flask import Flask, render_template, url_for, request, redirect
import csv
app = Flask(__name__)
print(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/icon.ico')
def favicon():
    return "icon"

@app.route("/<string:page_name>")
def html_page(page_name):
    return render_template(page_name)

def write_to_file(data):
    with open('database.txt', mode='a') as database:
        name = data["name"]
        email = data["email"]
        message = data ["message"]
        file = database.write(f' \n{name},{email},{message}')

def write_to_csv(data):
    with open('database.csv', mode='a') as database2:
        name = data["name"]
        email = data["email"]
        message = data ["message"]
        csv_writer = csv.writer(database2, delimiter=' ', newline='', quotechar=',', quoting=csv.QUOTE_MINIMAL)        
        csv_writer.writerow([name,email,message])

@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        try:
          data = request.form.to_dict()
          write_to_csv(data)
          return redirect('./thankyou.html')
        except Exception as e:
            return redirect(url_for('error', error_message=str(e)))
    else:
        return'something went wrong'