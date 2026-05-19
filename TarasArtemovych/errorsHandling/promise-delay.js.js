function delay(delayInSeconds) {
    return new Promise((resolve, reject) => {
        if(delayInSeconds > 0){
            console.log('first');
            setTimeout(resolve, delayInSeconds * 1000, "second");      
        }
        else{
            reject(new Error("Invalid argument: delayInSeconds must be a positive number"));
        }
    });
}
delay(-1)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("error:  ", error.message);
    })

