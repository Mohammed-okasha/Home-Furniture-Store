// Active DOM Element Function
function activeDOMelement(domElement, eleClass) {
    domElement.classList.add(eleClass);
};

// Hide DOM Element Function
function hideDOMelement(domElement, eleClass) {
    domElement.classList.remove(eleClass);
};
//!========================================================================
//* [Header Menu Mobile]

// Menu Control Function
function menuControl() {
    // Access To DOM Elemnts
    const headerMenu = document.getElementsByClassName("header-menu")[0];
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const navLists = document.querySelectorAll(".nav-list-dropdown");
    const toggleSpans = document.querySelectorAll(".dropdown-list .toggle");
    const prevBtns = document.querySelectorAll(".back .prev");

    openMenu.addEventListener("click", _ => {
        // Add Open Class To Header Menu
        headerMenu.classList.add("open");
        activeDOMelement(
            document.getElementsByClassName("menu-oevrlay")[0],
            "active"
        );
    });

    closeMenu.addEventListener("click", _ => {
        // Remove Open Class From Header Menu
        headerMenu.classList.remove("open");
        // Call hideDOMelement Fun
        hideDOMelement(
            document.getElementsByClassName("menu-oevrlay")[0],
            "active"
        );
    });
    
    // Looping On navList
    toggleSpans.forEach(toggle => {
        toggle.addEventListener("click", e => {

            navLists.forEach(list => {
                if (e.target.id === list.dataset.list) {
                    list.classList.add("slide");
                };
            });
        });

    });

     // Looping On prevBtns
    prevBtns.forEach(btn => {
        btn.onclick = _ => {
            navLists.forEach(list => {
                list.classList.remove("slide");
            });
        };
    });
};

menuControl();
//!========================================================================
// DOM Elements Events Function
function DOMElementsEvents() {
    //* Select DOM Elemnts
    const userBtn = document.getElementsByClassName("account-btn")[0];
    const closeBtn = document.querySelector(".box-form-login .close-form");
    const cartBtns = document.querySelectorAll("#header .cart-btn");
    const closeCart = document.getElementById("close-cart");
    const cartSidebar = document.querySelector("#shopping_cart .cart-sidebar");
    const searchBtn = document.getElementById("search-btn");
    const closeSearchForm = document.getElementById("close-searchForm");

    userBtn.addEventListener("click", _ => activeDOMelement(
        document.getElementById("form-login-register"),
        "form-overlay"
    ));

    closeBtn.addEventListener("click", _ => hideDOMelement(
        document.getElementById("form-login-register"),
        "form-overlay"
    ));

    // Cart Sidebar Control
    cartBtns.forEach(btn => {
        btn.addEventListener("click", e => {
            if (e.target) {
                activeDOMelement(
                    document.getElementById("shopping_cart"),
                    "cart-overlay"
                )
                // Add Open Class To Cart Sidebar
                cartSidebar.classList.add("open");
            };
        });
    });

    closeCart.addEventListener("click", _ => {
        hideDOMelement(
            document.getElementById("shopping_cart"),
            "cart-overlay"
        ),

        // Add Open Class To Cart Sidebar
        cartSidebar.classList.remove("open");
    });

    searchBtn.addEventListener("click", _ => activeDOMelement(
        document.getElementById("search-form-mobile"),
        "active"
    ));

    closeSearchForm.addEventListener("click", _ => hideDOMelement(
        document.getElementById("search-form-mobile"),
        "active"
    ));
};

DOMElementsEvents();
//!========================================================================
// [Hero Section Slider]
// Carousel Function
function carousel() {
    const dots = document.querySelectorAll(".dots-control .dot");

    // Invoke dotsControl Fun
    dotsControl(dots);
};

carousel();

// DotsControl Function
function dotsControl(dots) {
    // Looping On dots
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener("click", e => {
            dots.forEach(dot => {
                dot.classList.remove("active");
            });

            e.currentTarget.classList.add("active");

            activeSlider(dotIndex);
        });
    });
};

function activeSlider(dotIndex) {
    const sliders = document.querySelectorAll(".hero-slider .slide");

    // Looping On sliders
    sliders.forEach((slider, sliderIndex) => {
        // if dotIndex is The Same sliderIndex
        if (dotIndex === sliderIndex) {
            // Add slide-active To Slider
            slider.classList.add("slide-active");

        } else {
            // Remove slide-active From Slider
            slider.classList.remove("slide-active");
        };
    });
};
//!========================================================================












































