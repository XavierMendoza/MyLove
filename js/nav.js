document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".floating-nav");
  if (!nav) return;

  setTimeout(() => {
    nav.classList.add("visible");
  }, 9000);
});
