const initMobileMenu = () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  if (!menuToggle || !menu) return;

  const mobileViewport = window.matchMedia("(max-width: 767px)");

  const setMenuOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  mobileViewport.addEventListener("change", (event) => {
    if (!event.matches) setMenuOpen(false);
  });
};

document.addEventListener("DOMContentLoaded", initMobileMenu);