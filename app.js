function bin2dec(bin){
    let decimal = 0;
    let len_binary = bin.length - 1;


    if(bin.length <= 8){

        for(let i = 0; i <= (bin.length - 1); i++){
        if(bin[i] > 1){
            alert('Number invalid');
            document.getElementById('binary').value = 0;
            return 0;
        }
        else{
            for(let j= 0; len_binary >= 0; j++){
                decimal += eval(bin[len_binary] * (2 ** j));
                len_binary--;
                }
            }
        }
    } else {
        alert('Number invalid');
        document.getElementById('binary').value = 0;
        return 0;
    }

    return decimal;

}

function main(){
    const binary = document.getElementById('binary').value
    const decimal = bin2dec(binary);
    document.getElementById('decimal').value = decimal;
}
