// $(document).ready(function() {
//     $('.menu-link:eq(0)').click(function(e) {
//         $('.drop-menu').toggleClass('open');
//         $('.menu-item:eq(0)').toggleClass('change-arrow');
//     });
//
//     $('.menu-link:eq(1)').click(function(e) {
//         $('.drop-menu-two').toggleClass('open');
//         $('.menu-item:eq(1)').toggleClass('change-arrow');
//     });
// });

var dropMenu = document.querySelector('.drop-menu');
var dropMenuTwo = document.querySelector('.drop-menu-two');
var menuLink = document.querySelectorAll('.menu-link');
var menuItem = document.querySelectorAll('.menu-item');

menuLink[0].addEventListener('click', function() {
    dropMenu.classList.toggle('open');
    menuItem[0].classList.toggle('change-arrow');
});

menuLink[1].addEventListener('click', function() {
    dropMenuTwo.classList.toggle('open');
    menuItem[1].classList.toggle('change-arrow');
});

