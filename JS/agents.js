// HEADER SECTION - RESPONSIVE NAVBAR

var screen = window.matchMedia("(max-width: 900px)")
let state = false

screen.addListener(toggleNavbarNav)

function toggleNavbarNav() {
    let nav = document.getElementsByClassName('nav')[0]

    if (!screen.matches) {
        nav.style.display = 'flex'
        state = false
    }

    else if (screen.matches) {
        if (!state) {
            nav.style.display = 'none'
            state = true
        }
        else if (state) {
            nav.style.display = 'block'
            state = false
        }
    }
}