document.querySelectorAll(".listContainer")
    .forEach(el => {
        el.onmouseover = function () {
            const listItems = this.querySelectorAll("li");
            listItems[0].style.backgroundColor = "red";
            listItems[listItems.length - 1].style.backgroundColor = "blue";

            for (let i = 0; i < listItems.length; i++) {
                if (i !== 0 && i !== (listItems.length - 1)) {
                    listItems[i].style.backgroundColor = "green";
                }
            }
        }
    });
