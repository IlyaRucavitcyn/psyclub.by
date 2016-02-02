$(".header").sticky({
           topSpacing: 0
       });

$(window).on('load', function () {
  $('.loading').removeClass('loading')
});

$('.scroll-button').on('click', function () {
  $('body').animate({scrollTop:$(window).height()},1000)
})
