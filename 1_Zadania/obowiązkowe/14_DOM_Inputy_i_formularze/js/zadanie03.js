function submitForm() {
    const inputFields = [...document.querySelectorAll("form div.form-group input")];
    const scoreboard = document.querySelector("table.table tbody");

    const team1 = inputFields.find(field => field.id === "team1");
    const team2 = inputFields.find(field => field.id === "team2");

    const points1 = inputFields.find(field => field.id === "points1");
    const points2 = inputFields.find(field => field.id === "points2");


    const teamsAreDifferent = team2.value.trim() !== team1.value.trim();
    const pointsOneCorrect = points1.value >= 0;
    const pointsTwoCorrect = points2.value >= 0;

    if (teamsAreDifferent && pointsOneCorrect && pointsTwoCorrect) {
        const scoreentry = document.createElement("tr");

        const team1Cell = document.createElement("td");
        const team2Cell = document.createElement("td");
        const pointsCell = document.createElement("td");

        team1Cell.innerText = team1.value;
        team2Cell.innerText = team2.value;
        pointsCell.innerText = `${points1.value} : ${points2.value}`;

        scoreentry.appendChild(team1Cell);
        scoreentry.appendChild(team2Cell);
        scoreentry.appendChild(pointsCell);

        scoreboard.appendChild(scoreentry);
    }

    return false;
}
