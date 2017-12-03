var gallery = document.getElementById('gallery')
// var img = new Image(1,1); // width, height values are optional params
// document.getElementById('container').appendChild(img)
var uid = 0
var title = ''
var date = ''
var body = ''
var img = ''
var client = ''
var projects = [
  {
    id: 0,
    title: 'First Project',
    image: '../static/project1.jpg',
    client: 'Tesla Motors',
    date: '15. Jan 2017',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 1,
    title: 'Second Project',
    image: '../static/project2.jpg',
    client: 'Prince Aviation',
    date: '30. Avg 2017',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    id: 2,
    title: 'Third Project',
    image: '../static/project3.jpg',
    client: 'Plank Production',
    date: '27. Mar 2016',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    title: 'Fourth Project',
    image: '../static/project4.jpg',
    client: 'Plank Production',
    date: '27. Mar 2016',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    title: 'Fifth Project',
    image: '../static/project5.jpg',
    client: 'Plank Production',
    date: '27. Mar 2016',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 5,
    title: 'Sixth Project',
    image: '../static/project6.jpg',
    client: 'Plank Production',
    date: '27. Mar 2016',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

var max = projects.length

renderItems()

function renderItems () {
  for (var i = 0; i < projects.length; i++) {
    makeCard(i)
    var parent = document.getElementById(i)
    makeImg(projects[i].image, parent, 350)
    makeMeta(parent, projects[i].title, projects[i].date, projects[i].client)
  }
}

function makeImg (src, parent, width) {
  var img = new Image(width)
  img.src = src
  parent.appendChild(img)
}

function makeCard (id) {
  var card = document.createElement('div')
  card.id = id
  card.className = 'card'
  card.addEventListener("click", function(event){
      event.preventDefault()
      getDataForModal(event.path[2].id)
      showModal()
      uid = Number(event.path[2].id)
      console.log(uid)
  })
  gallery.appendChild(card)
}

function makeMeta (parent, title, date, client) {
  var holder = document.createElement('div')
  var h4 = document.createElement('h4')
  var p = document.createElement('p')
  var small = document.createElement('small')

  holder.className = 'card-holder'

  h4.innerHTML = title
  h4.className = 'card-title'
  small.innerHTML = date
  small.className = 'card-meta'
  p.innerHTML = client
  p.className = 'card-client'

  holder.appendChild(h4)
  holder.appendChild(small)
  holder.appendChild(p)

  parent.appendChild(holder)
}

var state = false

function showModal () {
  if (!state) {
    state = true

    var modal = document.createElement('div')
    modal.id = 'galleryModal'
    makeImg(image, modal, 400)
    makeMeta(modal, title, date, client)

    var p = document.createElement('p')
    p.innerHTML = body
    modal.appendChild(p)

    makeButton('closeButton', modal, 'close')
    makeButton('previousButton', modal, 'keyboard_arrow_left')
    makeButton('nextButton', modal, 'keyboard_arrow_right')

    document.body.appendChild(modal)

    var closeButton = document.getElementById('closeButton')
    var nextButton = document.getElementById('nextButton')
    var previousButton = document.getElementById('previousButton')

    closeButton.addEventListener("click", function(event){
        event.preventDefault()
        closeModal()
    })
    nextButton.addEventListener("click", function(event){
        event.preventDefault()
        nextSlide(event.path[2].id)
    })
    previousButton.addEventListener("click", function(event){
        event.preventDefault()
        previousSlide(event.path[2].id)
    })
  } else if (state) {
    closeModal()
  }
}

function closeModal () {
  state = false
  var modal = document.getElementById('galleryModal')
  document.body.removeChild(modal)
}

function getDataForModal (id) {
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].id == id) {
      title = projects[i].title
      body = projects[i].body
      image = projects[i].image
      date = projects[i].date
      client = projects[i].client
    }
  }
}

function makeButton (id, parent, icon) {
  var a = document.createElement('a')
  var i = '<i class="material-icons">' + icon + '</i>'
  a.href = '#'
  a.id = id
  a.innerHTML = i
  parent.appendChild(a)
}
function nextSlide() {
  if (uid <= max) {
    uid += 1
    closeModal()
    getDataForModal(uid)
    showModal()
  } else {
    uid = 0
    closeModal()
    getDataForModal(uid)
    showModal()
  }
}
function previousSlide() {
  if (uid > 0) {
    uid -= 1
    closeModal()
    getDataForModal(uid)
    showModal()
  } else {
    uid = max
    closeModal()
    getDataForModal(uid)
    showModal()
  }
}
