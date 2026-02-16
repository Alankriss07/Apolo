console.log("For my love ❤️");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("zoom");
        });
    });
});
