(function ($) {
    // "use strict";

    /*------ Timer active ----*/
    $('#timer-1-active').syotimer({
        year: 2022,
        month: 12,
        day: 31,
        hour: 23,
        minute: 59,
        layout: 'hms',
        periodic: false,
        periodUnit: 'd'
    });

    // Category slider active
    var sliderActiveFour = new Swiper('.category-slider-active', {
        loop: true,
        spaceBetween: 43,
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            }
        },
    });

    // Category slider active 2
    var sliderActiveFive = new Swiper('.category-slider-active-2', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 6,
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            479: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            }
        },
    });

    // Product slider active 2
    var sliderActiveSix = new Swiper('.product-slider-active-2', {
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        },
    });

    // Testimonial active
    var sliderActiveSeven = new Swiper('.testimonial-active', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3
            }
        },
    });

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.product-quality');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*====== product-color-active ======*/
    $(".product-color-active ul li a").on('click', function (e) {
        e.preventDefault();
        $(".product-color-active ul li a").removeClass("active");
        $(this).addClass("active");
    });

    /*--------------------------
        Isotope active 1
    ---------------------------- */
    $('.grid').imagesLoaded(function () {
        // init Isotope
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer',
            }
        });
    });

    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function () {
        sliderrange.slider({
            range: true,
            min: 20,
            max: 200,
            values: [0, 160],
            slide: function (event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    /* NiceSelect */
    $('.nice-select').niceSelect();

    /*---- CounterUp ----*/
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    /*---------------------
        Select active
    --------------------- */
    $('.select-two-active').select2();
    $(window).on('resize', function () {
        $('.select-two-active').select2()
    });

    /*--- checkout toggle function ----*/
    $('.checkout-click1').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });


    /*--- checkout toggle function ----*/
    $('.checkout-click3').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });

    /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function () {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function () {
        $('.open-toggle').slideToggle(1000);
    });

    /*-------------------------
    checkout one click toggle function
    --------------------------*/
    var checked = $('.sin-payment input:checked')
    if (checked) {
        $(checked).siblings('.payment-box').slideDown(900);
    };
    $('.sin-payment input').on('change', function () {
        $('.payment-box').slideUp(900);
        $(this).siblings('.payment-box').slideToggle(900);
    });


    /*-----------------------
        Image Popup active
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*-------------------------
      Scroll Animation
    --------------------------*/
    AOS.init({
        once: true,
        duration: 1000,
    });

})(jQuery);