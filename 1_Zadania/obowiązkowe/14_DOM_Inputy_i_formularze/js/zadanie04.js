document.addEventListener("DOMContentLoaded", () => {
    const cardNumberInput = document.querySelector("input#name");
    const cardTypeContainer = document.querySelector("div#type");

    cardNumberInput.onkeyup = function (event) {
        const cardNumber = event.target.value;
        const cardType = detectCardType(cardNumber);

        if (cardType != null) {
            cardTypeContainer.innerText = cardType;

            const isValid = cardValidators[cardType](cardNumber);
            if (isValid) {
                this.parentElement.classList.add("has-success");
            } else {
                this.parentElement.classList.remove("has-success")
            }
        } else {
            cardTypeContainer.innerText = "";
            this.parentElement.classList.remove("has-success");
        }
    };
});

function detectCardType(value) {
    for (const cardType in predicates) {
        const applies = predicates[cardType](value);
        if (applies) {
            return cardType;
        }
    }
    return null;
}

const predicates = {
    "Visa": (value) => +value[0] === 4,
    "Mastercard": (value) => +value[0] === 5,
    "American Express": (value) => {
        if (+value[0] !== 3) {
            return false;
        }
        return +value[1] === 4 || +value[1] === 7;
    }
};

const cardValidators = {
    "Visa": (value) => value.length >= 13 && value.length <= 16,
    "Mastercard": (value) => value.length === 16,
    "American Express": (value) => value.length === 15
};
