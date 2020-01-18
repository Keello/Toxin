$(function(){
  $('.dropdown__input').click(function(){
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
    val = $('.dropdown__number').val();
    if(val==1)
      this.setAttribute('disabled', 'disabled');
    $('.dropdown__number').val(+val-1);
  });
  $('.dropdown__counter-button-plus').click(function(){
    val = $('.dropdown__number').val();
    $('.dropdown__counter-button-minus').removeAttr('disabled');
    $('.dropdown__number').val(+val+1);
  });
});