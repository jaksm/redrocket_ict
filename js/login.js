var mainButton = document.getElementById('login')
var modal = document.getElementById('loginModal')
var form = '<form class="loginform" id="loginForm" onsubmit="logUser()"><fieldset><input type="text" name="username" id="username" placeholder="Your username"></fieldset><fieldset><input type="password" id="password" name="password" placeholder="Your password"></fieldset><button type="submit" name="submit" class="btn-ghost">Login</button><button type="button" onclick="closeMe()" name="cancel" class="btn-ghost">Cancel</button></form>'

mainButton.addEventListener("click", function (event) {
  event.preventDefault()
  show()
})

var state = false

function show () {
  if (state === false) {
    state = true
    modal.innerHTML = form
    return state
  }
  if (state === true) {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    username = ''
    password = ''
    state = false
    modal.innerHTML = ''
    return state
  }
}

function closeMe () {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  username = ''
  password = ''
  state = false
  modal.innerHTML = ''
  return state
}

function logUser() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  alert( 'Username - ' + username + ' and Password - ' + password)
}
