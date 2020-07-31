$(document).ready(function() {
function check() {
/*判斷手機尺寸*/
 if ($(window).width() >= 768){
/*判斷螢幕 scrollTop:滾動距離，height:高度*/
  var window_bottom_position = ($(window).scrollTop() + $(window).height());
  var nav_position=($('.swiper-container').offset().top+$('.swiper-container').outerHeight());
  if($(window).scrollTop() >= nav_position){
    $('.navbar').addClass('top-nav-collapse');
  }else {
    $('.navbar').removeClass('top-nav-collapse');
  }


  $.each($('.load'), function() {
 /*判斷物件 offset:上方距離，outerHeight:高度*/
    var element_bottom_position = ($(this).offset().top + $(this).outerHeight()/2);
 
/*檢視觸發規則 使用完全滾出物件才觸發*/
    if (element_bottom_position <= window_bottom_position) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}
else {
  $('.load').addClass('active');

}
}

$(window).on('scroll resize', check);

}); 