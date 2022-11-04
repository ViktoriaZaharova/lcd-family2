$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.about-slider').slick({
    slidesToShow: 3,
    vertical: true,
    dots: true,
    arrows: false,
    infinite: false,
    // adaptiveHeight: true
});

$('.life-family-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
});

$('.planes-slider').slick({
    slidesToShow: 2,
    dots: true,
    appendArrows: '.planes-slider-nav',
    appendDots: '.planes-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
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