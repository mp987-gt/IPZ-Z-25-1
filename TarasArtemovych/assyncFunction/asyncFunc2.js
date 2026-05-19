async function delay(delayInSeconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, delayInSeconds * 1000);
    });
}

console.log('first');

await delay(5);

console.log('second');
