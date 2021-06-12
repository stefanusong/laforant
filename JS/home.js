// HEADER SECTION - RESPONSIVE NAVBAR

var screen = window.matchMedia("(max-width: 900px)")
let nav = document.getElementsByClassName('nav')[0]
let state = false
if (screen.matches) {
    state = true
}   else if (!screen.matches) {
    state = false
}


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

$(document).ready(function(){

    // HEADER SECTION - RESPONSIVE DROPDOWN

    let active = false;

    $(".dropdown").click(function() {
            if (!active) {
                $('.dropdown-menu').css({
                display: 'block'
                })
                active = true;
            }
            else if (active) {
                $('.dropdown-menu').css({
                display: 'none'
                })
                active = false;
            }
    })

    // CONTENT SECTION - Redirect to .content-1 div.

    $(".btn-class").click(function() {
        $('html,body').animate({
            scrollTop: $(".content-1").offset().top},
            'slow');
    });
});