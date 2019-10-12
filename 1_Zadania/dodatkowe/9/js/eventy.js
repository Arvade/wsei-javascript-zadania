document.addEventListener("DOMContentLoaded", () => {
    const [firstList, secondLink] = document.querySelectorAll("a");

    firstList.addEventListener("click", (e) => {
        e.currentTarget.nextElementSibling.style.display = "block";
    });

    secondLink.addEventListener("mouseover", (e) => {
        e.currentTarget.nextElementSibling.style.display = "block";
    })
});
