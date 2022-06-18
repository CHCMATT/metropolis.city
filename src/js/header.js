document.getElementById("nav-toggle").addEventListener ("click", toggleNav);
function toggleNav() {
	var nav = document.getElementById("nav-menu");
	var className = nav.getAttribute("class");
	if (!nav.classList.contains("is-active")) {
			nav.classList.add("is-active");
			console.log('adding is-active');
	}
	else {
			nav.classList.remove("is-active");
			console.log('removing is-active');
	}
}