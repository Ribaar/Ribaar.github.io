$('.slider).slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  speedautoplay: 300,
  focusonselect: true,
  variablewidth: true,
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