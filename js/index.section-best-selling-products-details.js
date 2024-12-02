const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.querySelector(".main-image");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnail.classList.add("active");
    mainImage.src = thumbnail.src;
  });
});
