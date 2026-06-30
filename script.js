// ================================
// DONUT SERVICES SCRIPT
// ================================

// Smooth page fade in
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Contact button
const contactButton = document.getElementById("contactBtn");

if (contactButton) {
    contactButton.addEventListener("click", () => {

        // CHANGE THIS TO YOUR DISCORD USERNAME OR LINK
        const discordUsername = "https://discord.com/channels/@me";

        alert(
`Thank you for your interest!

Contact me on Discord:

${realkorek}

Tell me:
• Minecraft Username
• Service Needed
• Project Description
• Coordinates`
        );

    });
}

// Button hover animation
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px) scale(1)";

    });

});

// Floating service cards
document.querySelectorAll(".service-card").forEach((card, index) => {

    let direction = index % 2 === 0 ? 1 : -1;

    setInterval(() => {

        card.style.transform =
            `translateY(${Math.sin(Date.now()/900 + index) * 6 * direction}px)`;

    }, 25);

});
