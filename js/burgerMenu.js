var burgerMenu = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu');
var overlay = document.querySelector('.overlay');
var closeMenu = document.querySelector('.close-menu');

burgerMenu.addEventListener('click', function() {
    menu.style.display = 'flex';
    overlay.style.display = 'block';
});

closeMenu.addEventListener('click', function () {
    menu.style.display = 'none';
    overlay.style.display = 'none';
});

// $(document).ready(function() {
//     $('.burger-menu').on('click', function() {
//         $('.menu').css('display' , 'flex');
//         $('.overlay').css('display' , 'block');
//     });
//
//     $('.close-menu').on('click', function() {
//         $('.menu').css('display' , 'none');
//         $('.overlay').css('display' , 'none');
//     })
// });
