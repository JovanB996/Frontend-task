$(document).ready(function(){

    // Navbar JS start
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item");

    /* Toggle mobile menu */
    function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
    }
    /* Event Listeners */
    toggle.addEventListener("click", toggleMenu, false);
    // Navbar JS end

    // Carousel JS start
    $('.product-carousel').flickity({
        autoPlay: 3000,
        wrapAround: true,
        fade: true,
        pageDots: false,
    });
    // Carousel JS end

});