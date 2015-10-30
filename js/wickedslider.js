// Slider settings
var width = 720;
var animationSpeed = 1000;
var pause = 1000;
var currentSlide = 1;

// Cache DOM
var $slider = $('#wickedslider');
var $slideContainer = $slider.find('slides');
var $slides = $slideContainer.find('.slide');

var interval;

// setInterval
function startSlider() {
    interval = setInterval(function () {
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
            currentSlide++;
            if (currentSlide === $slides.length) {
                currentSlide = 1;
                $sliderContainer.css('margin-left', 0);
            }
        });
    }, pause);
}

function stopSlider() {
    clearInterval(interval);
}

$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

startSlider();
