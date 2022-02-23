// FOR DARK MODE

let darkModeCheckbox = document.getElementById('theme-toggle')
darkModeCheckbox.addEventListener('click', toggleTheme)


function toggleTheme(evt) {
  let target = evt.currentTarget.firstChild
  if (evt.target.classList[1] === 'fa-moon') {
    document.body.classList.add('dark-mode')
    target.classList.remove('fa-moon')
    target.classList.add('fa-sun')
  }
  else {
    document.body.classList.remove('dark-mode')
    target.classList.add('fa-moon')
    target.classList.remove('fa-sun')
  }
}

let btns = document.querySelectorAll(".scroll-to")
console.log(btns)
if (btns) {
  btns.forEach(function(el){
    el.addEventListener('click', scrollPop);
  });
}

// show section and scroll to it
function scrollPop(evt) {
  let target = evt.currentTarget
  let associatedBtn = document.getElementById(target.id + '-btn')
  associatedBtn.click()
}
