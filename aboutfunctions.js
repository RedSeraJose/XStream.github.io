document.addEventListener("DOMContentLoaded", function () {
    const openPanelButton = document.getElementById("openPanelButton");
    const closePanelButton = document.getElementById("closePanelButton");
    const sidePanel = document.querySelector(".side-panel");
    const overlay = document.querySelector(".overlay");
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    openPanelButton.addEventListener("click", function () {
        sidePanel.classList.add("show");
        overlay.classList.add("show");
    });

    closePanelButton.addEventListener("click", function () {
        console.log("Close button clicked");
        sidePanel.classList.remove("show");
        overlay.classList.remove("show");
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
        const headings = document.querySelectorAll("h2, h3, h4, h5, h6, h7");

        function fadeInHeadings() {
            headings.forEach((heading) => {
                const boundingClientRect = heading.getBoundingClientRect();
                if (boundingClientRect.top <= window.innerHeight - 100) {
                    heading.style.opacity = 1;
                }
            });
        }
    
        // Initially fade in headings that are already visible
        fadeInHeadings();
    
        // Listen for scroll events and fade in headings as they come into view
        window.addEventListener("scroll", function () {
            fadeInHeadings();
        });
    });
});
