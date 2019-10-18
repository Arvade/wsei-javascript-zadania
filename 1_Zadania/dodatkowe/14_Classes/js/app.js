class Kaczka {
    constructor(type) {
        this.type = type || "zwykla kaczka";
    }

    kwacz() {
        console.log("kwa kwa");
    }

    plywaj() {
        console.log("płynę....");
    }

    wyswietl() {
        console.log(`Wyglada jak ${this.type}`)
    }

    lec() {
        console.log("Lecę");
    }
}


class DzikaKaczka extends Kaczka {
    constructor() {
        super("dzika");
    }

    kwacz() {
        super.kwacz();
    }

    plywaj() {
        super.plywaj();
    }

    wyswietl() {
        super.wyswietl();
    }
}

class KrzyzowkaKaczka extends Kaczka {
    constructor() {
        super("krzyzoKaczucha");
    }
}


class GumowaKaczka extends Kaczka {
    wyswietl() {
        this.type = "gumowa";
        super.wyswietl();
    }

    lec() {
        console.log("gumowe kaczki nie potrafią latać :(")
    }
}


console.log("---- Kaczucha ----- ");
const kaczucha = new Kaczka();
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();
kaczucha.lec();

console.log("---- Dzika Kaczucha ----- ");
const dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();
dzikaKaczucha.lec();


console.log("---- Krzyzo Kaczucha ----- ");
const krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();
krzyzoKaczucha.lec();


console.log("---- Gumowa ----- ");
const gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();