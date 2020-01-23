$(function(){
  $('.dropdown__wrapper').click(function(){
    if($('.dropdown__submenu').is(':visible')){
        $('.dropdown__submenu').slideUp(200);
        //$('').removeClass('');
    }
    if($('.dropdown__submenu').is(':hidden')){
        $('.dropdown__submenu').slideDown(200);
        //$('').addClass('');
    }
  });
  $('.dropdown__counter-button-minus').click(function(){
    val = $(this.nextSibling).val();
    val -=1;
    if(val==0)
      this.setAttribute('disabled', 'disabled');
    $(this.nextSibling).val(val);
  });
  $('.dropdown__counter-button-plus').click(function(){
    val = $(this.previousSibling).val();
    val++;
    $(this.previousSibling).val(val);
    if(val>0)
      $(this.previousSibling.previousSibling).removeAttr('disabled');
  });
});