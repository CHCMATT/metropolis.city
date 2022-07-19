document.getElementById("nav-toggle").addEventListener ("click", toggleNav);
function toggleNav() {
	var nav = document.getElementById("nav-menu");
	if (!nav.classList.contains("is-active")) {
			nav.classList.add("is-active");
	}
	else {
			nav.classList.remove("is-active");
	}
}