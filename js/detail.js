const selectedImages = document.getElementsByClassName("content__product-image-selector-item");
const displayedImage = document.querySelector(".content__image-info"); 

for (let i = 0; i < selectedImages.length; i++) {
    selectedImages[i].addEventListener("click", () => {
        const src = selectedImages[i].getAttribute("src");
        displayedImage.setAttribute("src", src);
    });
}


const tabs = document.querySelectorAll(".content__tab__content-button");
const contents = document.querySelectorAll(".content-tab-content-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

