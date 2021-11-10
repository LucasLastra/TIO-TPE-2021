"use strict";

let btn_menu = document.querySelector("#btn_menu");
btn_menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.querySelector(".hide").classList.toggle("show");
}