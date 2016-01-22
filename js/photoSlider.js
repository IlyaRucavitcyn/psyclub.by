// var $photoContainer = $('#photo-holder');
function setElementHeight (element, height){
  element.height(height);
}
function setElementWidth (element, width){
  element.width(width);
}
function setElementLeft(element, marginLeft){
  element.css("left", marginLeft);
}
function setElementTop(element, marginTop){
  element.css("top", marginTop);
}

setElementHeight($('#photo-holder'),$(window).height());
setElementWidth($('.visual-container .image-frame'),$(window).width());
setElementHeight($('.visual-container .image-frame'),$(window).height());
setElementLeft($('.visual-container .image-frame'),-$(window).width()/4);
setElementTop($('.visual-container .image-frame'),$(window).height()/2-$('.visual-container .image-frame').height()/2);


$(window).on("resize", function () {
  setElementHeight($('#photo-holder'),$(window).height());
  setElementWidth($('.visual-container .image-frame'),$(window).width());
  setElementLeft($('.visual-container .image-frame'),-$(window).width()/4);
  setElementTop($('.visual-container .image-frame'),$(window).height()/2-$('.visual-container .image-frame').height()/2);
});
