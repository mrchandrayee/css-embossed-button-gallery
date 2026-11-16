// All examples are real buttons with native hover, focus and active states.
// Click a demo button to toggle a pressed preview state on touch devices.
document.querySelectorAll(".demo-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-clicked");
    window.setTimeout(() => button.classList.remove("is-clicked"), 320);
  });
});
