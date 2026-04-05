document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".top-badge, .paint-icon, h1, .subtitle, .info-bar, .service-card, .contact-section, .footer"
  );

  animatedItems.forEach((item, index) => {
    item.classList.add("fade-in");

    setTimeout(() => {
      item.classList.add("show");
    }, 120 * index);
  });
});
