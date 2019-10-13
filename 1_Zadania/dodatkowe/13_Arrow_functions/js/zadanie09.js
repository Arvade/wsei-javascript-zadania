document.addEventListener("DOMContentLoaded", () => {

    [...document.querySelectorAll("div span")]
        .forEach(span => {
            span.addEventListener('mouseover', (e) => e.currentTarget.nextElementSibling.style.display = "block")
        })

});
