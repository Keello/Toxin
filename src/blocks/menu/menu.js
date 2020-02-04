$(function(){
  $(".menu__item").first().addClass('menu__item_active');
  $(".menu__item").click(function(){
  let old = $(this).parent().find('.menu__item_active');
  $(old).removeClass('menu__item_active');
  $(this).addClass("menu__item_active");
});
});