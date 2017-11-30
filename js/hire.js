var holder = document.getElementById('price')
var name = document.getElementById('name')
var tel = document.getElementById('tel')
var email = document.getElementById('email')
var estPrice = document.getElementById('estPrice')
var projectName = document.getElementById('projectName')
var description = document.getElementById('description')

function display (value) {
  holder.innerHTML = value + ' $'
}

function onSubmit () {
  alert(
     'Your name: ' + name.value
    + 'Your tel: ' + tel.value
    + 'Your email: ' + email.value
    + 'Estimated budget: ' + estPrice.value
    + 'Project Title: ' + projectName.value
    + 'Project description: ' + description.value
  )
}
