function convertNumToStr (str, callback) {
    
    if(isNaN(str) || str.trim() == ""){
        callback(new Error("Invalid number!"), null);
    }
    else{
        let converted = Number(str);
        callback(null, converted);
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

convertNumToStr("23", message);
