$(function() {

  // Initiate Slider
  $('#slider-range').slider({
    range: true,
    min: 10000,
    max: 100000,
    step: 500,
    values: [10000, 50000]
  });

  // Apply initial values to the range container
  $('.range').html('<span class="range-value">' + $('#slider-range').slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>&#8381</sup></span> - <span class="range-value">' + $("#slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>&#8381</sup></span>');


  $('#slider-range').slider({
    slide: function(event, ui) {

      // Update the range container values upon sliding

      $('.range').html('<span class="range-value">' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>&#8381</sup></span> - <span class="range-value">' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>&#8381</sup></span>');

      // Get old value
      var previousVal = parseInt($(this).data('value'));

      // Save new value
      $(this).data({
        'value': parseInt(ui.value)
      });
    }
  });

});