document.addEventListener("DOMContentLoaded", () => {
    const invoiceSection = document.getElementById("invoiceData");
    const invoiceCheckbox = document.getElementById("invoice");

    invoiceSection.style.display = invoiceCheckbox.checked ? "block" : "none";

    invoiceCheckbox.onclick = function () {
        invoiceSection.style.display = this.checked ? "block" : "none";
    }
});
