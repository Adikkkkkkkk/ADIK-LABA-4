const makeCensored = (sentence, n_words) => 
{
    let sentenceArr = sentence.split(' ');
    let result = '';
    for(let i = 0; i < sentenceArr.length; i++)
    {
        if(n_words.includes(sentenceArr[i]))
        {
            sentenceArr[i] = '!@#$';
        }
        result += sentenceArr[i] + ' ';
    } 
    return result;
}



console.log(makeCensored('Жил без страха и умер без страха', ['страха', 'умер']));  

