$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.about-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                fade: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.life-family-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    // autoplay: true,
});

$('.planes-slider').slick({
    slidesToShow: 2,
    dots: true,
    appendArrows: '.planes-slider-nav',
    appendDots: '.planes-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.location-family-slider1').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
});

$('.location-family-slider2').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
});

$('.location-family-slider3').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
});

$('.location-family-slider4').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.steps-works-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            arrows: false
        });
    } else {
        $(".steps-works-slider.slick-initialized").slick("unslick");
    }
});
// slick active

//progressbar
function setProgress1(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('width', calc + '%')
        .attr('aria-valuenow', calc);

}

const $slider = $('.location-family-slider1');
const $progressBar = $('.progress-bg1');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress1(nextSlide);
});

setProgress1(0);

function setProgress2(index) {
    const calc2 = ((index + 1) / ($slider2.slick('getSlick').slideCount)) * 100;

    $progressBar2
        .css('width', calc2 + '%')
        .attr('aria-valuenow', calc2);

}

const $slider2 = $('.location-family-slider2');
const $progressBar2 = $('.progress-bg2');

$slider2.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress2(nextSlide);
});

setProgress2(0);


function setProgress3(index) {
    const calc3 = ((index + 1) / ($slider3.slick('getSlick').slideCount)) * 100;

    $progressBar3
        .css('width', calc3 + '%')
        .attr('aria-valuenow', calc3);

}

const $slider3 = $('.location-family-slider3');
const $progressBar3 = $('.progress-bg3');

$slider3.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress3(nextSlide);
});

setProgress3(0);

function setProgress4(index) {
    const calc4 = ((index + 1) / ($slider4.slick('getSlick').slideCount)) * 100;

    $progressBar4
        .css('width', calc4 + '%')
        .attr('aria-valuenow', calc4);

}

const $slider4 = $('.location-family-slider4');
const $progressBar4 = $('.progress-bg4');

$slider4.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress4(nextSlide);
});

setProgress4(0);


$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
});


$(".input-range").slider({
    range: "min",
    min: 2000000,
    max: 10000000,
    value: 4700000,
    create: function (event, ui) {
        $('.input-range-wrapper').find('.ui-slider-handle').append("<span class='value'></span>");
        $('.input-range-wrapper').find('.value').html('10000');

    },
    slide: function (event, ui) {
        // $('.slider-wrapper2').find
        $('.input-range-wrapper').find('.value').html(ui.value);
    }
});