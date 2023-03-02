var menu_wrapp = document.querySelector(".header_fixed");
let menu_btn = document.querySelector(".menu_hamburger_header");

menu_btn.onclick = function(e) {
	menu_wrapp.classList.toggle("active");
}