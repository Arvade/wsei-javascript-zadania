document.addEventListener("DOMContentLoaded", () => {
    const mainElements = [...document.querySelectorAll("ul > li")].filter(el => !el.innerText.includes('.'));

    mainElements.forEach(el => {
        el.addEventListener("mouseover", function () {
            const sublist = [...this.children].filter(e => e.tagName.toLowerCase() === 'ul');
            if (sublist.length > 0) {
                sublist.forEach(list => list.style.display = "block");
            }
        });

        el.addEventListener('mouseout', function () {
            const sublist = [...this.children].filter(e => e.tagName.toLowerCase() === 'ul');
            if (sublist.length > 0) {
                sublist.forEach(list => list.style.display = "none");
            }
        });
    })
});
