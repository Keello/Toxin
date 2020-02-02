$(function(){
  $('.dropdown__wrapper').click(function(){
    var elem = this.nextSibling;
    var values = $('.dropdown__submenu-item-counter').children('.dropdown__number');
    var quantity = 0;
    for (var i = 0; i < values.length; i++) {
      quantity = quantity + +$(values[i]).val();
    }
    $(this).children('.dropdown__input').val(quantity);
    if($(elem).is(':visible')){
        $(elem).slideUp(200);
    }
    if($(elem).is(':hidden')){
        $(elem).slideDown(200);
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