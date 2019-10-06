var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

];

for (let i = 0; i < animals.length; i++) {
    printObj(animals[i],'');
    console.log(""); // Empty line
}

function printObj(obj, prefix) {
    for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                printObj(obj[property], prefix + " ");
            } else {
                console.log(`${prefix} ${property} : ${obj[property]}`);
            }
        }
    }
}
