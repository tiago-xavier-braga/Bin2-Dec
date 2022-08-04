const binary = '110011001';

// error in valid binary number

function bin2dec(bin){
    let decimal = 0;
    let len_binary = bin.length - 1;


    if(bin.length <= 8){

        for(let i = 0; i <= (bin.length - 1); i++){
        if(bin[i] > 1){
            console.log('Number invalid');
            break;
        }
        else{
            for(let j= 0; len_binary >= 0; j++){
                decimal += eval(bin[len_binary] * (2 ** j));
                len_binary--;
                }
            }
        }
    } else {
        console.log('Number invalid');
    }

    return decimal;

}
console.log(bin2dec(binary))