$(function() {
    // slider
    $('.offer-slider__inner').slick({
        dots: true,
        arrows: false
    });
    // menu link active
    $('.menu__list-link').on('click', function () {        
        $('.menu__list-link').removeClass('menu__list-link--active');
        $(this).toggleClass('menu__list-link--active');        
    });
    // mobile menu
    $('.menu-btn').on('click', function () {
        $('.menu-btn').toggleClass('menu-btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
    // close mobile menu after click on body
    const menuList = document.querySelector('.menu__list');
    const menuBtn = document.querySelector('.menu-btn');
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.menu-btn') && menuList.classList.contains('menu__list--active')) {
            menuList.classList.remove('menu__list--active');
            menuBtn.classList.remove('menu-btn--active');
        }
    });
});