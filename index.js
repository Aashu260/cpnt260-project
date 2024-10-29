// Simplified JavaScript to toggle menu
const targetEl = document.getElementById("targetEl");
const triggerEl = document.getElementById("triggerEl");

triggerEl.addEventListener("click", () => {
  targetEl.classList.toggle("hidden");
});
