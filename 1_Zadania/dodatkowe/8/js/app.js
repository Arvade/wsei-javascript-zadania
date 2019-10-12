/* Zadanie 1 */
function Tree(type) {
    this.type = type;
}

const tree1 = new Tree("first");
const tree2 = new Tree("second");
const tree3 = new Tree("three");

Tree.prototype.bloom = () => "I am blooming";
