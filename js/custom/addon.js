// FOR DARK MODE

let darkModeCheckbox = document.getElementById('theme-toggle')
darkModeCheckbox.addEventListener('change', toggleTheme)


function toggleTheme(evt) {
  console.log(evt)
  if (evt.target.checked) {
    console.log(document.body)
    document.body.classList.remove('dark-mode')
  }
  else {
    
    document.body.classList.add('dark-mode')
  }
}
// smooth scroll