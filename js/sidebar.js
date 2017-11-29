var button = document.getElementById('toggle')
var sidebar = document.getElementById('sidebar')

button.addEventListener("click", function(event){
    event.preventDefault()
    toggleSidebar()
})

function toggleSidebar () {
  if (sidebar.style.right == '-100vw') {
    sidebar.style.right = '0px'
  } else if (sidebar.style.right == '0px') {
    sidebar.style.right = '-100vw'
  } else if (sidebar.style.right == '') {
    sidebar.style.right = '0px'
  }
}
