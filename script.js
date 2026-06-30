// Fade in page
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Smooth button animation
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px) scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });
});

// Glow effect follows mouse
document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".background");

    if (bg) {
        bg.style.backgroundPosition =
            `${50 + e.clientX / 60}px ${50 + e.clientY / 60}px`;
    }
});
