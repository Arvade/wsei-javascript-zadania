document.querySelectorAll(".parent")
    .forEach(el => {
        el.addEventListener("mouseover", (event) => {
            const content = event.target.children;
            for (let i = 0; i < content.length; i++) {
                content[i].style.display = "block";
            }
        });

        el.addEventListener("mouseleave", (event) => {
            const content = event.target.children;
            for (let i = 0; i < content.length; i++) {
                content[i].style.display = "none";
            }
        })
    });
