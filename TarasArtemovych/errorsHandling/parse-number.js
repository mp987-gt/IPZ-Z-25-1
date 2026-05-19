function parseNumber(input, callback){
    try{
        if (isNaN(input) || input.trim() === ""){
            throw new Error ( "Unable to convert this to number");
        }

        let result = Number(input);
        callback(null, result);

    } catch (error) {
        callback(error, null);
    }
}
function message(error, data){
    if(error){
        console.log(error.message);
    }
    else{
        console.log(data);
        console.log(typeof(data));
    }
}

let inputValue = "";

parseNumber(inputValue, message);
