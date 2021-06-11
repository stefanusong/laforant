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

$(document).ready(function(){
    // let totalSlide = $('.card-container div.card-slider div.card').length
    // let slideWidth = $('.card-container div.card-slider div.card').width()
    // let slideHeight = $('.card-container div.card-slider div.card').height()
    // let totalWidth = slideWidth * totalSlide

    // $('.card-container').css({
    //     width : 990,
    //     height: slideHeight,
    // })

    // $('.card-container div.card-slider').css({
    //     width: 2100,
    //     marginLeft: -330
    // })

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

            var Copy = $('.card-container div.card-slider div.card:first-child').clone(true)
            Copy.appendTo('.card-container div.card-slider')
            $('.card-container div.card-slider').animate({
            left : -330
            }, 1000, function() {
            $('.card-container div.card-slider div.card:first-child').remove()
            $('.card-container div.card-slider').css({
                left: ''
            })
        })
        }
    }) 
});