$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.about-slider').slick({
    slidesToShow: 3,
    vertical: true,
    dots: true,
    arrows: false,
    infinite: false
    // variableWidth: true,
    // adaptiveHeight: true
});

$(".input-range").slider({
    range: "min",
    min: 2000000,
    max: 10000000,
    value: 4700000,
    create: function( event, ui ) {
        $('.input-range-wrapper').find('.ui-slider-handle').append("<span class='value'></span>");
        $('.input-range-wrapper').find('.value').html('10000');

    },
    slide: function( event, ui ) {
        // $('.slider-wrapper2').find
        $('.input-range-wrapper').find('.value').html(ui.value);
    }
});