var findComplement = function(num) {
    let numIn2 = (num).toString(2),
        str = "";
    for(let i = 0; i < numIn2.length; i++){
        if(Number(numIn2[i]) === 0){
            str += "1";
        }else{
            str += "0";
        }
    }
    return parseInt(str,2)
};
