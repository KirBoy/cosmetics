$('.header__btn, .menu--adaptive').on('click', function () {
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

$(".menu a, .logo").on("click", function (event) {
    
  event.preventDefault();

  var id  = $(this).attr('href'),
    top = $(id).offset().top;

  $('body,html').animate({scrollTop: top}, 1500);
});


var header = $("#header__top"),
  aboutH = $("#about").innerHeight(),
  scrollOffset = $(window).scrollTop();


/* Fixed Header */
checkScroll(scrollOffset);

$(window).on("scroll", function () {
  scrollOffset = $(this).scrollTop();

  checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
  if (scrollOffset >= aboutH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}