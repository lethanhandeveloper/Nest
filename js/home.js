const catMenu = document.querySelector('.header__navbar-catmenu-container');
const dropdown = document.querySelector('.header__catmenu-dropdown');

catMenu.addEventListener('mouseenter', () => {
  dropdown.style.display = 'block';
});
catMenu.addEventListener('mouseleave', () => {
  dropdown.style.display = 'none';
});