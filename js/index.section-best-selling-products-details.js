document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.querySelector(".main-image");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            // Change active thumbnail
            document.querySelector(".thumbnail.active").classList.remove("active");
            thumbnail.classList.add("active");
            
            // Change main image
            mainImage.src = thumbnail.src;
        });
    });
});
