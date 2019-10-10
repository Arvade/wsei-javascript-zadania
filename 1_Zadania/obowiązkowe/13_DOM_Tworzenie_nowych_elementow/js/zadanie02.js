document.addEventListener("DOMContentLoaded", () => {
    const orders = document.getElementById("orders");

    const orderIdInput = document.getElementById("orderId");
    const itemInput = document.getElementById("item");
    const quantityInput = document.getElementById("quantity");

    const addButton = document.getElementById("addBtn");

    addButton.onclick = () => orders.addOrder(orderIdInput.value, itemInput.value, quantityInput.value);

    orders.addOrder = function (orderId, item, quantity) {
        const orderIdField = `<td>${orderId}</td>`;
        const itemField = `<td>${item}</td>`;
        const quantityField = `<td>${quantity}</td>`;
        this.innerHTML += `<tr>${orderIdField} ${itemField} ${quantityField}</tr>`;
    };
});
