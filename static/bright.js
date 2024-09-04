// eslint-disable-next-line no-unused-vars
function dropdown () {
  const kebabContent = document.getElementById('dropdown')

  if (kebabContent.style.display === 'none') {
    kebabContent.style.display = 'block'
  } else {
    kebabContent.style.display = 'none'
  }
}

// eslint-disable-next-line no-unused-vars
function theme () {
  const body = document.getElementById('body')
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'black'
  } else {
    body.style.backgroundColor = 'white'
  }

  const nav = document.getElementById('nav')
  if (nav.style.backgroundColor === 'white') {
    nav.style.backgroundColor = 'black'
  } else {
    nav.style.backgroundColor = 'white'
  }

  const divider = document.getElementById('divider')
  if (divider.style.backgroundColor === 'white') {
    divider.style.backgroundColor = 'black'
  } else {
    divider.style.backgroundColor = 'white'
  }

  const footer = document.getElementById('footer')
  if (footer.style.backgroundColor === 'white') {
    footer.style.backgroundColor = 'black'
  } else {
    footer.style.backgroundColor = 'white'
  }
}

// const kebabIcon = document.getElementById('kebabIcon')
// kebabIcon.addEventListener('click', function () {
//   const kebabContent = document.getElementById('linksAndSwitchIcon')
//   if (kebabContent.style.display === 'none') {
//     kebabContent.style.display = 'block'
//   } else {
//     kebabContent.style.display = 'none'
//   }
// })
