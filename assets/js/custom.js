$(document).ready(function() {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");

    $(".menu-Bar").click(function() {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
    });

    $(".loginUp").click(function() {
        $(".LoginPopup").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".signUp").click(function() {
        $(".signUpPop").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".closePop,.overlay").click(function() {
        $(".popupMain").fadeOut();
        $(".overlay").fadeOut();
    });

    /* Tabbing Function */
    $("[data-targetit]").on("click", function(e) {
        $(this).addClass("active");
        $(this)
            .siblings()
            .removeClass("active");
        var target = $(this).data("targetit");
        $("." + target)
            .siblings('[class^="box-"]')
            .hide();
        $("." + target).fadeIn();
        $(".tabViewList").slick("setPosition", 0);
    });

    // Accordian
    $(".accordian h4").click(function() {
        $(".accordian li").removeClass("active");
        $(this)
            .parent("li")
            .addClass("active");
        $(".accordian li div").slideUp();
        $(this)
            .parent("li")
            .find("div")
            .slideDown();
    });

    $("li.dropdown-nav").hover(function() {
        $(this)
            .children("ul")
            .stop(true, false, true)
            .slideToggle(300);
    });

    $(".searchBtn").click(function() {
        $(".searchWrap").addClass("active");
        $(".overlay").fadeIn("active");
        $(".searchWrap input").focus();
        $(".searchWrap input").focusout(function(e) {
            $(this)
                .parents()
                .removeClass("active");
            $(".overlay").fadeOut("active");
            $("body").removeClass("ovr-hiddn");
        });
    });

    $(".index-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
           
    });

     $(".what-we-do-slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        fade: true,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1
           
    });


    $(".logo-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        prevArrow: "<span class='logo-left'><i class='fa fa-chevron-left'></i></span>",
        nextArrow: "<span class='logo-right'><i class='fa fa-chevron-right'></i></span>",

    });

    //     Slider For
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true
    // });

    /* Top Scroll */
    // $('body').on('click', '.scrolldown-fl', function() {
    //     goToScroll('awardSec');
    // });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});

$(window).on("load", function() {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
    );
    $("ul.menu li a").each(function() {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $(this).removeClass("active");
            $(this)
                .closest("li")
                .addClass("active");
            $("ul.menu li.first").removeClass("active");
        }
    });
});

/* RESPONSIVE JS */
if ($(window).width() < 824) {}

function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $(".topAppendTxt").each(function() {
            var getdtd = $(this)
                .find(".cloneDiv")
                .clone(true);
            $(this)
                .find(".cloneDiv")
                .remove();
            $(this).append(getdtd);
        });
    }
}

function goToScroll(e) {
    $("html, body").animate({
            scrollTop: $("." + e).offset().top
        },
        1000
    );
}





//Testimonials Slider


var $slider = $('.testimonial-slider');
var $progressBar = $('.progress');
var $progressBarLabel = $('.slider__label');
var slideCount = null;


$slider.on('init', function(event, slick) {
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
});



$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
    setCurrentSlideNumber(nextSlide);
    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
});

$slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "<span class='testimonial-left'><i class='fa fa-chevron-left'></i></span>",
    nextArrow: "<span class='testimonial-right'><i class='fa fa-chevron-right'></i></span>",
});


function setSlideCount() {
    var $el = $('.progress-bar-area').find('.total');
    $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
    var $el = $('.progress-bar-area').find('.current');
    $el.text(currentSlide + 1);
}