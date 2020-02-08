$(function(){
  $('.dropdown__wrapper').click(function(){
    let elem = this.nextSibling;
    let values = $('.dropdown__submenu-item-counter').children('.dropdown__number');
    let quantity = 0;
    for (let i = 0; i < values.length; i++) {
      quantity = quantity + +$(values[i]).val();
    }
    if(quantity>0)
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

  $('.dropdown_clear').click(function(){
    let parent = $(this).closest(".dropdown");
    $(parent).find('.dropdown__input').val('');
    parent.find('.dropdown__number').val(0);
    let minus = parent.find('.dropdown__counter-button-minus');
    for (let i = 0; i < minus.length; i++) {
      minus[i].setAttribute('disabled', 'disabled');
    }
  });

  $('.dropdown_confirm').click(function(){
    let values = $('.dropdown__submenu-item-counter').children('.dropdown__number');
    let quantity = 0;
    for (let i = 0; i < values.length; i++) {
      quantity = quantity + +$(values[i]).val();
    }
    let parent = $(this).closest(".dropdown");
    if(quantity>0)
      $(parent).find('.dropdown__input').val(quantity);
  });
});