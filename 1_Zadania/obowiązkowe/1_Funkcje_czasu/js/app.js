function countHello(n) {
    let counter = 0;
    const intervalId = setInterval(() => {
        console.log("Hello" + counter++);
        if (counter >= n) {
            clearInterval(intervalId);
        }
    }, n);
}