document.getElementById("nav-toggle").addEventListener ("click", toggleNav);
function toggleNav() {
	var nav = document.getElementById("nav-menu");
	var navbkg = document.getElementById("nav-background");
	navbkg.style.display = "block";
	if (!nav.classList.contains("is-active")) {
		console.log('opening navbar on mobile');
		nav.classList.add("is-active");
		navbkg.style.display = "block";
	}
	else {
		console.log('closing navbar on mobile');
		nav.classList.remove("is-active");
		navbkg.style.display = "none";
			
	}
}

function closeNav() {
	console.log('closing navbar menu');
	var nav = document.getElementById("nav-menu");
	var navdropdown = document.getElementById("game-servers");
	var navbkg = document.getElementById("nav-background");
	nav.classList.remove("is-active");
	navdropdown.style.display = "none";
	navbkg.style.display = "none";
}

/** The jQuery will trigger only at mobile viewport */
	const $navDropdowns = document.querySelectorAll(".navbar-item.has-dropdown");
	if ($navDropdowns.length > 0) {
		// HIDE THE DROP-DOWN ON THE INITIAL LOAD
		$navDropdowns.forEach((el) => {
			console.log('dropdown hidden by default');
			const target = el.dataset.target;
			const $target = document.getElementById(target);
			$target.style.display = "none";

			//Register the click event on the dropdown list
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute

				const target = el.dataset.target;
				const $target = document.getElementById(target);

				if ($target.style.display === "block") {
					console.log('closing mobile navbar dropdown');
					$target.style.display = "none";
				} else {
					console.log('opening mobile navbar dropdown');
					$target.style.display = "block";
					
				}
			});
		});
	}