// FOR DARK MODE

// check if localStorage item exists
var myKey = 'jpicazo-darkmode'

let themeValue = window.localStorage.getItem(myKey)
let darkModeCheckbox = document.querySelector("#theme-toggle")
if (themeValue) {
  handleThemeChange(darkModeCheckbox, themeValue, false)
}

darkModeCheckbox.addEventListener('click', toggleTheme)

function handleThemeChange(parent, mode, effect) {
  if (effect) {
    document.body.classList.add('dark-mode-transition')
  }
  let target = parent.firstChild
  if (mode === 'fa-moon') {
    document.body.classList.add('dark-mode')
    target.classList.remove('fa-moon')
    target.classList.add('fa-sun')
    window.localStorage.setItem(myKey, 'fa-moon')
  }
  else {
    document.body.classList.remove('dark-mode')
    target.classList.add('fa-moon')
    target.classList.remove('fa-sun')
    window.localStorage.setItem(myKey, 'fa-sun')
  }
}


function toggleTheme(evt) {
  let themeMode = evt.currentTarget.firstChild.classList[1]
  handleThemeChange(evt.currentTarget, themeMode, true)
}

// show section and scroll to it

let btns = document.querySelectorAll(".scroll-to")
if (btns) {
  btns.forEach(function(el){
    el.addEventListener('click', scrollPop);
  });
}
function scrollPop(evt) {
  let target = evt.currentTarget
  let associatedBtn = document.getElementById(target.id + '-btn')
  associatedBtn.click()
}

//hide mobile dock on click

let links = document.querySelectorAll(".navbar-link")
  if (links) {
    links.forEach(function(el) {
      el.addEventListener('click', hideMobileList)
    })
  }


function hideMobileList(evt) {
  var mobileQuery = window.matchMedia("(max-width: 991px)").matches
  if (mobileQuery) {
    let closeBtn = document.querySelector('.navbar-cross')
    closeBtn.click()
  }
}


let sendBtn = document.querySelector("#send-btn")

sendBtn.addEventListener('click', sendMessage)

async function sendMessage(evt) {
  // switch icon to loader and text
  let sendBtnSpan = evt.currentTarget.querySelector('span')
  let sendBtnIcon = evt.currentTarget.querySelector('i')
  let form = evt.currentTarget.closest(".contact-form")
  let formOutcome = form.querySelector(".form-outcome")
  formOutcome.classList.add('hide')
  let payload = {
    name: form.querySelector("#name").value,
    email: form.querySelector("#email").value,
    subject: form.querySelector("#subject").value,
    message: form.querySelector("#message").value
  }
  if (payload.name === '' || payload.email === '' || payload.subject === '' || payload.message === '') {
    formOutcome.style.color = 'red'
    formOutcome.textContent = 'Please fill out all the form values.'
    formOutcome.classList.remove('hide')
  }
  else {
    //send form
    try {
      sendBtnSpan.textContent = 'Sending'
      sendBtnIcon.classList.remove('fa-paper-plane')
      sendBtnIcon.classList.add(...['fa-spinner', 'fa-spin'])
      form.classList.add('blur')
      const response = await fetch('https://email-js-jpicazo.herokuapp.com/sendForm', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          payload
        )
      });
      if (response.status === 200) {
        // add sent
        formOutcome.textContent = 'Email has been sent.'
        formOutcome.style.color = 'green'
      }
      else {
        //error, retry
        formOutcome.textContent = 'Error sending email, if these keeps occuring, email me directly at jonathanpicazo@outlook.com.'
        formOutcome.style.color = 'red'
        
      }
      formOutcome.classList.remove('hide')
      form.classList.remove('blur')
      sendBtnSpan.textContent = 'send message'
      sendBtnIcon.classList.remove(...['fa-spinner', 'fa-spin'])
      sendBtnIcon.classList.add('fa-paper-plane')
    }
    catch(error) {
      console.log('error sending form', error)
    }
  }
}