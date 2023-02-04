

const makeCensored = (text, n_words) =>
{
    result = [];
    const wordsArr = text.split(' ');
    for(i = 0; wordsArr.length; i++)
    {
        if(wordsArr.includes(n_words))
        {
           result.push('$#%!') 
        }
        else{result += ` ${wordsArr[i]}`;}
    }
    return result;
}

const test = (text, n_words) => 
{
    result = ''
    textArr = text.split(' ');
for(const word of n_words)
{
    let j = `${word}`
    for(const wordT of textArr)
    {
        strWordT = `${wordT}`;
        if(strWordT.includes(j)){result += '$#%!'}
        else{result += `${wordT}`}
    }
}
    return result;
}

//console.log(test("I'm the best !", ['best','!']));
console.log(test('hello world !', ['hello', '!']))