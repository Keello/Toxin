$('.expandable-list').click(function(){
  if($('.expandable-list__items').is(':visible')){
    $('.expandable-list__items').slideUp(200);
  }
  if($('.expandable-list__items').is(':hidden')){
    $('.expandable-list__items').slideDown(200);
  }
});