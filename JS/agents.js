// HEADER SECTION - RESPONSIVE NAVBAR

var screen = window.matchMedia("(max-width: 900px)")
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

    // CONTENT SECTION

    $('.card-container div.card-slider div.card:last-child').prependTo('.card-container div.card-slider')

    var locked = false;

    function unlock() {
        locked = false;
    }

    $('#prev-btn').click(function () {
        if (!locked) {
            locked = true;
            setTimeout(unlock, 1100)
            $('.card-container div.card-slider').animate({
                left : 330
            }, 1000, function() {
                $('.card-container div.card-slider div.card:last-child').prependTo('.card-container div.card-slider')
                $('.card-container div.card-slider').css({
                    left: ''
                })
            })
        }
    })

    $('#next-btn').click(function () {
        if (!locked) {
            locked = true;
            setTimeout(unlock, 1100)

            $('.card-container div.card-slider').animate({
            left : -330
            }, 1000, function() {
            $('.card-container div.card-slider div.card:first-child').appendTo('.card-container div.card-slider')
            $('.card-container div.card-slider').css({
                left: ''
            })
        })
        }
    }) 
});