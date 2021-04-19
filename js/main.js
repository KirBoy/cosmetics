$('.header__btn, .menu').on('click', function () {
  $('.menu').toggleClass('menu--active');
  $('.header__btn').toggleClass('header__btn--active');
});

$('.brands__list').slick({
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 979,
      settings: {
        autoplay: true,
        speed: 300,
        slidesToShow: 4
      }
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },

    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});