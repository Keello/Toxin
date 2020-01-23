$(function(){
  $('.dropdown__wrapper').click(function(){
    var elem = this.nextSibling;
    if($(elem).is(':visible')){
        $(elem).slideUp(200);
        //$('').removeClass('');
    }
    if($(elem).is(':hidden')){
        $(elem).slideDown(200);
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