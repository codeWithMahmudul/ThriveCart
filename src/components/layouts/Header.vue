<template>
    <header class="header-area header-responsive-padding header-height-0">
        <div class="header-bottom sticky-bar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-6 col-6">
                        <div class="logo">
                            <RouterLink :to="{ name: 'home' }"><img src="/assets/images/logo/logo.png" alt="logo" />
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block d-flex justify-content-center">
                        <div class="main-menu text-center">
                            <nav>
                                <ul>
                                    <li>
                                        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink :to="{ name: 'blog' }">BLOG</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink :to="{ name: 'contactUs' }">CONTACT US</RouterLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6">
                        <div class="header-action-wrap">
                            <div class="header-action-style header-search-1">
                                <a class="search-toggle" href="#">
                                    <i class="pe-7s-search s-open"></i>
                                    <i class="pe-7s-close s-close"></i>
                                </a>
                                <div class="search-wrap-1">
                                    <form action="#">
                                        <input placeholder="Search products…" type="text" />
                                        <button class="button-search">
                                            <i class="pe-7s-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="header-action-style">
                                <a title="Login Register" href="login-register.html"><i class="pe-7s-user"></i></a>
                            </div>
                            <div class="header-action-style">
                                <a title="Wishlist" href="wishlist.html"><i class="pe-7s-like"></i></a>
                            </div>
                            <div class="header-action-style header-action-cart">
                                <a class="cart-active" href="#"><i class="pe-7s-shopbag"></i>
                                    <span class="product-count bg-black">01</span>
                                </a>
                            </div>
                            <div class="header-action-style d-block d-lg-none">
                                <a class="mobile-menu-active-button" href="#"><i class="pe-7s-menu"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-cart-active">
            <div class="sidebar-cart-all">
                <a class="cart-close" href="#"><i class="pe-7s-close"></i></a>
                <div class="cart-content">
                    <h3>Shopping Cart</h3>
                    <ul>
                        <li>
                            <div class="cart-img">
                                <a href="#"><img src="/assets/images/cart/cart-1.jpg" alt="" /></a>
                            </div>
                            <div class="cart-title">
                                <h4><a href="#">Stylish Swing Chair</a></h4>
                                <span> 1 × $49.00 </span>
                            </div>
                            <div class="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                        <li>
                            <div class="cart-img">
                                <a href="#"><img src="/assets/images/cart/cart-2.jpg" alt="" /></a>
                            </div>
                            <div class="cart-title">
                                <h4><a href="#">Modern Chairs</a></h4>
                                <span> 1 × $49.00 </span>
                            </div>
                            <div class="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                    </ul>
                    <div class="cart-total">
                        <h4>Subtotal: <span>$170.00</span></h4>
                    </div>
                    <div class="cart-btn btn-hover">
                        <a class="theme-color" href="cart.html">view cart</a>
                    </div>
                    <div class="checkout-btn btn-hover">
                        <a class="theme-color" href="checkout.html">checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
import $ from 'jquery'


function miniCart() {
    var navbarTrigger = $('.cart-active'),
        endTrigger = $('.cart-close'),
        container = $('.sidebar-cart-active'),
        wrapper = $('.main-wrapper');

    wrapper.prepend('<div class="body-overlay"></div>');

    navbarTrigger.on('click', function (e) {
        e.preventDefault();
        container.addClass('inside');
        wrapper.addClass('overlay-active');
    });

    endTrigger.on('click', function () {
        container.removeClass('inside');
        wrapper.removeClass('overlay-active');
    });

    $('.body-overlay').on('click', function () {
        container.removeClass('inside');
        wrapper.removeClass('overlay-active');
    });

};

function searchToggle() {
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.search-wrap-1').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).siblings('.search-wrap-1').addClass('open');
        }
    })
}


onMounted(() => {
    miniCart();
    searchToggle();
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $('.sticky-bar');
    var $window = $(window);
    $window.on('scroll', function () {
        var scroll = $window.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
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
})


</script>

<style scoped></style>