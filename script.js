document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".envelope-container");
  const toggleBtn = document.querySelector(".toggle-button");

  toggleBtn.addEventListener("click", () => {
    container.classList.toggle("open");
  });
});
