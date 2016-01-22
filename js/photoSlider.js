// var $photoContainer = $('#photo-holder');
var sliderHeight = $(window).height() - $("#sticky-wrapper").height();
$('#photo-holder').height(sliderHeight);
$(window).on("resize", function () {
  $('#photo-holder').height($(window).height() - $("#sticky-wrapper").height())
});
