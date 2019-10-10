document.querySelectorAll(".deleteBtn")
    .forEach(el => {
        el.onclick = function () {
            this.parentElement.parentElement.remove();
        }
    });
