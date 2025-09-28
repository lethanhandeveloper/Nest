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

// select
const displayedProductNumSelector = document.querySelector('.main__container-rightcorner-count');
const numText = document.querySelector('.main__container-count-num-text');
const countDropdown = displayedProductNumSelector.querySelectorAll('.main__container-count-dropdown li');

displayedProductNumSelector.addEventListener("click", () => {
  displayedProductNumSelector.classList.toggle("open");
})

countDropdown.forEach(opt => {
  opt.addEventListener('click', (e) => {
    numText.innerHTML = `${opt.innerText}`;
    e.stopPropagation();
    displayedProductNumSelector.classList.remove('open');
  });
});

//sort by
const sortBySelector = document.querySelector('.main__container-rightcorner-sort');
const sortText = document.querySelector('.main__container-count-sortby-text');
const sortDropdown = sortBySelector.querySelectorAll('.main__container-sort-dropdown li');

sortBySelector.addEventListener("click", () => {
  sortBySelector.classList.toggle("open");
})

sortDropdown.forEach(opt => {
  opt.addEventListener('click', (e) => {
    sortText.innerHTML = `${opt.innerText}`;
    e.stopPropagation();
    sortBySelector.classList.remove('open');
  });
});
