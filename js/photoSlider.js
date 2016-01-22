// var $photoContainer = $('#photo-holder');
function setElementHeight (element, height){
  element.height(height);
}
function setElementWidth (element, width){
  element.width(width);
}

setElementHeight($('#photo-holder'),$(window).height());
setElementWidth($('.visual-container .image-frame'),$(window).width());


$(window).on("resize", function () {
  setElementHeight($('#photo-holder'),$(window).height());
  setElementWidth($('.visual-container .image-frame'),$(window).width());
});
