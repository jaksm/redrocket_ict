var button = document.getElementById('toggle')
var sidebar = document.getElementById('sidebar')

button.addEventListener("click", function(event){
    event.preventDefault()
    toggleSidebar()
})

function toggleSidebar () {
  if (sidebar.style.right == 0) {
    sidebar.style.right = '-320px'
  } else if (sidebar.style.right == '-320px') {
    sidebar.style.right = '0px'
  } else if (sidebar.style.right == '0px') {
    sidebar.style.right = '-320px'
  }
}
