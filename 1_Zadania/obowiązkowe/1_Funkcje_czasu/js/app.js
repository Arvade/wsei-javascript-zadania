function countHello(n) {
    let counter = 1;
    const intervalId = setInterval(() => {
        console.log("Hello" + counter++);
        if (counter > n) {
            clearInterval(intervalId);
        }
    }, n);
}


countHello(3);