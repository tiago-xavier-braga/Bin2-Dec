const binary = '1010231';

// error in valid binary number

function bin2dec(bin){
    let decimal = 0;
    let len_binary = bin.length - 1;
    
    for(let i = 0; i <= (bin.length - 1); i++){
        if(bin.length[i] > 1){
            alert("Number invalid");
            console.log("Invalid")
        }
        else{
           /* for(let i = 0; len_binary >= 0; i++){
                decimal += eval(bin[len_binary] * (2 ** i)); 
                len_binary--;
            }*/
            return decimal;
        }
        console.log("Erro")
    }

    
}


console.log(bin2dec(binary))