$('.expandable-list').click(function(){
    if($('.expandable-list__items').is(':visible')){
        $('.expandable-list__items').hide(200);
        $('.expandable-list').removeClass('expandable-list_opened');
    }
    if($('.expandable-list__items').is(':hidden')){
        $('.expandable-list__items').show(200);
        $('.expandable-list').addClass('expandable-list_opened');
    }
});

