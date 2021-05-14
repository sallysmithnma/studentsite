$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.single-item').slick({
  arrows: false,
  autoplay: false,
  dots: false,
  centerMode: true,
  slidesToShow: 1,
  lazyLoad: 'progressive',
  speed: 900
});

// next button
$('.next-btn').click(function() {
  $('.single-item').slick('slickNext');
});

// previous button
$('.prev-btn').click(function() {
  $('.single-item').slick('slickPrev');
});

// next button
$('.next-btn').click(function() {
  $('.center').slick('slickNext');
});

// previous button
$('.prev-btn').click(function() {
  $('.center').slick('slickPrev');
});