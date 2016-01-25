// var $photoContainer = $('#photo-holder');
function setElementHeight (element, height) {
  element.height(height);
}

function setElementWidth (element, width) {
  element.width(width);
}

function setElementLeft(element, marginLeft) {
  element.css("left", marginLeft);
}

function setElementRight(element, marginRight) {
  element.css("right", marginRight);
}

function setImageTop (image, holder) {
  if (image.height() >= holder.height()) {
    image.css({
      width: '100%',
      height: 'auto',
      marginLeft:'',
      marginTop: (holder.height() - image.height())/2
    })
  } else {
    image.css({
      width: 'auto',
      height: '100%',
      marginTop:''
      });
    image.css({
      marginLeft: (holder.width() - image.width())/2
      });
  }
}

function slideImage (a,b) {
  a.css("width",'100%');
  b.css("width","0px");
}

setElementHeight($('#photo-holder'),$(window).height());
setElementWidth($('.visual-container .image-frame'),$(window).width());
setElementHeight($('.visual-container .image-frame'),$(window).height());
setElementLeft($('.visual-container .image-frame'),-$(window).width()/4);
setImageTop($('.visual-container .image-frame img'), $('.visual-container .image-frame'));


$(window).on("resize", function () {
  setElementHeight($('#photo-holder'),$(window).height());
  setElementWidth($('.visual-container .image-frame'),$(window).width());
  setElementHeight($('.visual-container .image-frame'),$(window).height());
  setElementLeft($('.visual-container .image-frame'),-$(window).width()/4);
  setImageTop($('.visual-container .image-frame img'), $('.visual-container .image-frame'));
});

$($(".visual-container .left-section")).on("click", function () {
  slideImage($(".visual-container .left-section"), $(".visual-container .right-section"));
  setElementLeft($('.visual-container .image-frame'), '0px');
})

$($(".visual-container .right-section")).on("click", function () {
  setElementLeft($('.visual-container .image-frame'), '0px');
  slideImage($(".visual-container .right-section"), $(".visual-container .left-section"));
})
