const makeCensored = (text, n_words) => {
    let result = "";
    let censore = "#$%@";
    let arrayCount = text.split(" ");
    for(let i = 0; i < arrayCount.length; i++) {
        if(n_words.includes(textArr[i])) {
            arrayCount[i] = censore;
        }
        result += arrayCount[i] + " ";
    }
return result;
} 

console.log(makeCensored('', ['','']));