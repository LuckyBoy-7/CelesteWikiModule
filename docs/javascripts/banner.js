function init() {
    document.querySelectorAll(".banner").forEach(banner => {
        const images = banner.querySelectorAll("img");

        if (images.length <= 1) return;

        let current = Math.floor(Math.random() * images.length);

        images.forEach(image => {
            image.style.opacity = 0;
            image.style.transition = "opacity 1.5s";
        });

        images[current].style.opacity = 1;

        // 强制浏览器应用上面的状态
        images[current].offsetHeight;

        setInterval(() => {
            images[current].style.opacity = 0;

            current = (current + 1) % images.length;

            images[current].style.opacity = 1;
        }, 5000);
    });
}

document$.subscribe(init);