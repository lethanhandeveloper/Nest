const catMenu = document.querySelector(".header__navbar-catmenu-container");
const dropdown = document.querySelector(".header__catmenu-dropdown");

catMenu.addEventListener("mouseenter", () => {
  dropdown.style.display = "block";
});
catMenu.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});

// product fly to cart
const cart = document.querySelector(".header__nav-shortcut-item-cart");
const addToCartBtns = document.querySelectorAll(
  ".main__container-pditem-addcartbtn"
);

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productItem = btn.closest(".main__container-product-item");
    const productImg = productItem.querySelector(".main__container-pditem-img");

    const productImgClone = productImg.cloneNode(true);
    productImgClone.classList.add("main__container-pditem-flyimg");

    document.body.appendChild(productImgClone);

    const imgRect = productImg.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    productImgClone.style.left = imgRect.left + "px";
    productImgClone.style.top = imgRect.top + "px";
    productImgClone.style.width = imgRect.width + "px";
    productImgClone.style.height = imgRect.height + "px";
    productImgClone.offsetWidth;

    productImgClone.style.left = cartRect.left + "px";
    productImgClone.style.top = cartRect.top + "px";
    productImgClone.style.width = "30px";
    productImgClone.style.height = "30px";
    productImgClone.style.opacity = "0.3";

    productImgClone.addEventListener("transitionend", () => {
      productImgClone.remove();
    });
  });
});

// const dropdown = document.querySelector('.dropdown');
// const items = document.querySelectorAll('.dropdown .item');

//   items.forEach(item => {
//     item.addEventListener('click', () => {
//       dropdown.style.display = 'none';
//     });
//   });
