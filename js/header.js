const headerSmallMenuBarIcon = document.querySelector(".header__small-menubar-icon");

headerSmallMenuBarIcon.addEventListener("click", () => {
   const menuMobileOverlay = document.querySelector(".menu__mobile-overlay");
   menuMobileOverlay.classList.add("active");
});


const headerMobileOverlayCloseIcon = document.querySelector(".menu__mobile-overlay-close-icon");

headerMobileOverlayCloseIcon.addEventListener("click", () => {
   const menuMobileOverlay = document.querySelector(".menu__mobile-overlay");
   menuMobileOverlay.classList.remove("active");
});