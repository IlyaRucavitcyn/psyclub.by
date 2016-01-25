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

function slideImage (a,aWidth,b,bWidth) {
  a.css("width",aWidth);
  b.css("width",bWidth);
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
  if (!$('.visual-container').hasClass('slided')){
    setElementLeft($('.visual-container .image-frame'),-$(window).width()/4);
  }
  setImageTop($('.visual-container .image-frame img'), $('.visual-container .image-frame'));
});

$($(".visual-container .left-section")).on("click", function () {
  if($(".visual-container .left-section").hasClass("active")) {
    slideImage($(".visual-container .left-section"), "50%", $(".visual-container .right-section"), "50%");
    $(".visual-container .left-section").removeClass("active");
    return;
  }
  $(".visual-container .left-section").addClass("active");
  slideImage($(".visual-container .left-section"),"100%",$(".visual-container .right-section"),"0%");
  setElementLeft($('.visual-container .image-frame'), '0px');
  $('.visual-container').addClass('slided');
})

$($(".visual-container .right-section")).on("click", function () {
  if($(".visual-container .right-section").hasClass("active")) {
    slideImage($(".visual-container .rigth-section"), "50%", $(".visual-container .left-section"), "50%");
    $(".visual-container .right-section").removeClass("active");
    return;
  }
  $(".visual-container .right-section").addClass("active");
  setElementLeft($('.visual-container .image-frame'), '0px');
  slideImage($(".visual-container .right-section"),"100%",$(".visual-container .left-section"),"0%");
  $('.visual-container').addClass('slided');
})
