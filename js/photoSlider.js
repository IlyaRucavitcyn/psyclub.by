// var $photoContainer = $('#photo-holder');
function setElementHeight (element, height){
  element.height(height);
}

setElementHeight($('#photo-holder'),$(window).height() - $("#sticky-wrapper").height());

$(window).on("resize", function () {
  setElementHeight($('#photo-holder'),$(window).height() - $("#sticky-wrapper").height())
});
