document.addEventListener("DOMContentLoaded", () => {
    const clearCheckbox = document.querySelector('form .checkbox:nth-last-of-type(1) input');
    const allTypesCheckbox = document.querySelector('form .checkbox:first-child input');
    const checkboxes = document.querySelectorAll('input[data-price]');
    const finalPriceElement = document.querySelector('#price');

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', () => updatePrice()));

    allTypesCheckbox.addEventListener('click', (e) => {
        e.currentTarget.checked = true;
        clearCheckbox.checked = false;
        checkboxes.forEach(checkbox => checkbox.checked = true);
        updatePrice();
    });

    clearCheckbox.addEventListener('click', (e) => {
        checkboxes.forEach(checkbox => checkbox.checked = false);
        allTypesCheckbox.checked = false;
        clearCheckbox.checked = false;
        updatePrice();
    });

    const updatePrice = () => {
        const price = [...checkboxes].reduce((prev, acc) => {
            if (acc.checked) {
                return prev + parseFloat(acc.getAttribute('data-price'));
            }
            return prev;
        }, 0);
        finalPriceElement.textContent = `${price} zł`;
    };
});

