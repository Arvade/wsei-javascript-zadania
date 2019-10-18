class MenuGenerator {
    constructor(type, elements) {
        this.type = type;
        this.elements = elements;
    }

    getType() {
        console.log(`Menu type : ${this.type}`);
    }

    showItems() {
        console.log(`menu elements : ${this.elements}`);
    }
}

class HorizontalMenuGenerator extends MenuGenerator {
    animate() {
        console.log(`Animatacja menu typu : vertical`);
    }
}

class VerticalMenuGenerator extends MenuGenerator {

}

let hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
let vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);
