function openModal() {
	var element = document.getElementById("terms-modal");
  element.classList.add("is-active");
}

function closeModal() {
	var element = document.getElementById("terms-modal");
  element.classList.remove("is-active");
}

function closeAllModals() {
  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    closeModal($modal);
  });
}

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
  const e = event || window.event;
  if (e.key === "Escape") { // Escape key
    closeAllModals();
  }
});