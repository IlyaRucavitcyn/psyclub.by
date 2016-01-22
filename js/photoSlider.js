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


  if ($('.visual-container .image-frame img').height() >= $('.visual-container .image-frame').height()) {
    $('.visual-container .image-frame img').css({
      width: '100%',
      height: 'auto',
      marginLeft:'',
      marginTop: ($('.visual-container .image-frame').height() - $('.visual-container .image-frame img').height())/2
    })
  } else {
    $('.visual-container .image-frame img').css({
      width: 'auto',
      height: '100%',
      marginTop:''
      });
    $('.visual-container .image-frame img').css({
      marginLeft: ($('.visual-container .image-frame').width() - $('.visual-container .image-frame img').width())/2
      });
  }


setElementHeight($('#photo-holder'),$(window).height());
setElementWidth($('.visual-container .image-frame'),$(window).width());
setElementHeight($('.visual-container .image-frame'),$(window).height());
setElementLeft($('.visual-container .image-frame'),-$(window).width()/4);
// setElementTop($('.visual-container .image-frame'),$(window).height()/2-$('.visual-container .image-frame').height()/2);


$(window).on("resize", function () {
  setElementHeight($('#photo-holder'),$(window).height());
  setElementWidth($('.visual-container .image-frame'),$(window).width());
  setElementHeight($('.visual-container .image-frame'),$(window).height());
  setElementLeft($('.visual-container .image-frame'),-$(window).width()/4);
  // setElementTop($('.visual-container .image-frame'),$(window).height()/2-$('.visual-container .image-frame').height()/2);

  if ($('.visual-container .image-frame img').height() >= $('.visual-container .image-frame').height()) {
    $('.visual-container .image-frame img').css({
      width: '100%',
      height: 'auto',
      marginLeft:'',
      marginTop: ($('.visual-container .image-frame').height() - $('.visual-container .image-frame img').height())/2
    })
  } else {
    $('.visual-container .image-frame img').css({
      width: 'auto',
      height: '100%',
      marginTop:''
      });
    $('.visual-container .image-frame img').css({
      marginLeft: ($('.visual-container .image-frame').width() - $('.visual-container .image-frame img').width())/2
      });
  }
});
