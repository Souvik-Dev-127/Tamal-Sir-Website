document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const yearElement = document.getElementById("year");
  const page = window.location.pathname.split("/").pop() || "index.html";
  const pageMap = {
    "index.html": "home",
    "materials.html": "materials",
    "contact.html": "contact"
  };
  const currentPage = pageMap[page];

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (currentPage) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.getAttribute("data-nav") === currentPage) {
        link.classList.add("active-nav");
      }
    });
  }

  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }
      const targetElement = document.querySelector(targetId);
      if (!targetElement) {
        return;
      }
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
