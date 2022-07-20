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
/** The jQuery will trigger only at mobile viewport */
if (window.matchMedia("(max-width: 1080px)").matches) {   
	console.log('mobile device found'); 
	const $navDropdowns = document.querySelectorAll(".navbar-item.has-dropdown");
	if ($navDropdowns.length > 0) {
		// HIDE THE DROP-DOWN ON THE INITIAL LOAD
		$navDropdowns.forEach((el) => {
			const target = el.dataset.target;
			const $target = document.getElementById(target);
			$target.style.display = "none";

			//Register the click event on the dropdown list
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				
				if ($target.style.display === "block") {
					$target.style.display = "none";
				} else {
					$target.style.display = "block";
				}
			});
		});
	}
}
	