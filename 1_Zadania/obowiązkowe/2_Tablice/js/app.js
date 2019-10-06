function distFromAvarage(tab) {
    const sum = tab.reduce((a, b) => a + b, 0);
    const average = sum / tab.length;
    return tab.map(e => e - average);
}


