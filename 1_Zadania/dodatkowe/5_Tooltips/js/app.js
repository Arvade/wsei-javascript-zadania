/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", () => {
    const tooltips = [...document.querySelectorAll(".tooltip")];
    const tooltipElement = document.createElement("span");
    tooltipElement.classList.add("tooltipText");

    tooltips.forEach(tooltip => {
        const tip = tooltipElement.cloneNode(false);

        tooltip.addEventListener("mouseover", function () {
            tip.innerText = this.getAttribute("data-text");
            this.appendChild(tip);
        });

        tooltip.addEventListener("mouseout", function () {
            this.removeChild(tip);
        });
    })
});
