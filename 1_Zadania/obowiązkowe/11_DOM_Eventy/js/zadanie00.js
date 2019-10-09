document.querySelectorAll(".parent")
    .forEach(el => {
        el.addEventListener("mouseover", (event) => {
            const content = event.target.children;
            for (let i = 0; i < content.length; i++) {
                content[i].style.display = "block";
            }
        });

        el.addEventListener("mouseleave", () => hideChildrenElement());

        function hideChildrenElement() {
            const parents = this.document.querySelectorAll(".parent");
            for (let i = 0; i < parents.length; i++) {
                const parent = parents[i];
                if (parent === el) {
                    parent.children[0].style.display = "none";
                }
            }
        }
    });
