document.addEventListener("DOMContentLoaded", function () {
    const openPanelButton = document.getElementById("openPanelButton");
    const closePanelButton = document.getElementById("closePanelButton");
    const sidePanel = document.querySelector(".side-panel");
    const overlay = document.querySelector(".overlay");

    openPanelButton.addEventListener("click", function () {
        sidePanel.classList.add("show");
        overlay.classList.add("show");
        
    });

    closePanelButton.addEventListener("click", function () {
        sidePanel.classList.remove("show");
        overlay.classList.remove("show");
    });
});