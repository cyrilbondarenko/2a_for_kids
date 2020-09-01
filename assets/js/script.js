$(document).ready(function(){
  $('header .invite .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: $('header .arrows .left'),
    nextArrow: $('header .arrows .right'),
  });
  $('.show .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: $('.show .arrows .left'),
    nextArrow: $('.show .arrows .right')
  });
  $('.events .gallery').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '55px',
    autoplay: true,
    responsive: [
    {
      breakpoint: 780,
      settings: {

      }
    },
  ]
  });
  $('.events .mobGallery').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    autoplay: true,
  });
  $('.discount .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    autoplay: true,
    appendDots: '.discount .dots',
    prevArrow: $('.discount .arrows .left'),
    nextArrow: $('.discount .arrows .right'),
    dots: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: false,
      }
    },
  ]
  });
  $('.about .slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: $('.about .arrows .left'),
    nextArrow: $('.about .arrows .right'),
    responsive: [
    {
      breakpoint: 1740,
      settings: {
        centerMode: true,
        slidesToShow: 1,
      }
    },
  ]
  });
  $('.programs .tabs > div').click(function(){
    $('.programs .tabs .active').removeClass('active');
    tab = $(this).attr('class');
    $(this).addClass('active');
    if (tab == 'tab1') {
      $('.programs .tabsPrograms .types .active').removeClass('active');
      $('.programs .tabsPrograms .types > div:nth-child(1)').addClass('active');
      $('.programs .tabsPrograms .types').show();
    } else {
      $('.programs .tabsPrograms .types').hide();
    }
    $('.programs .tabsPrograms > .active').removeClass('active');
    $('.programs .tabsPrograms .' + tab).addClass('active');
  });
  $('.programs .tabsPrograms .types > div').click(function(){
    $('.programs .tabsPrograms .types .active').removeClass('active');
    $(this).addClass('active');
  });
  $('.programs .tabsPrograms .types > div:nth-child(1)').click(function(){
    $('.programs .tabsPrograms > .active').removeClass('active');
    $('.programs .tabsPrograms .tab1').addClass('active');
  });
  $('.programs .tabsPrograms .types > div:nth-child(2)').click(function(){
    $('.programs .tabsPrograms > .active').removeClass('active');
    $('.programs .tabsPrograms .tabKids').addClass('active');
  });
  $('.programs .tabsPrograms .types > div:nth-child(3)').click(function(){
    $('.programs .tabsPrograms > .active').removeClass('active');
    $('.programs .tabsPrograms .tabTeen').addClass('active');
  });
  $('.events .gallery .slide').click(function(){
    src = $(this).find('> img').attr('src');
    $('.events .mainImage').attr('src', src);
  });
  $('.popup .close').click(function(){
    $('.popup').css('display', 'none');
  });
  $('.request').click(function(){
    $('.popup').css('display', 'flex');
  });
  $('.show .close').click(function(){
    $('.show').css('display', 'none');
  });
  $('.tabsPrograms a').click(function(){
    $('.show').css('display', 'flex');
  });
  $('.discount a').click(function(){
    $('.show').css('display', 'flex');
  });
  $('.about .slide').click(function(){
    url = $(this).attr('url');
    $('.video-popup .video-container').html('<iframe width="1280" height="720" src="'+ url +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('.video-popup').css('display', 'flex');
  });
  $('.video-popup .close').click(function(){
    $('.video-popup').css('display', 'none');
    $('.video-popup iframe').remove();
  });
});
