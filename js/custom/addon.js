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



