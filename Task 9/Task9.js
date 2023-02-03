const getTotalAmount = (array, currency) => 
{
    let result = 0;
    if(array.length === 0){result = array}
    else{
    for(i = 0; i < array.length; i ++)
    {
    let cur = array[i].slice(0,3);
    let num = Number(array[i].slice(4));
    
        if(currency === cur)
        {
            result += num;
        }
        else{continue;}
        
    }
}
    return result;
}

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
console.log(getTotalAmount(money1,'usd'));
const money2 = ['eur 10', 'usd 1', 'eur 20', 'rub 1000', 'eur 5', 'eur 100'];
console.log(getTotalAmount(money2,'eur'));

console.log(getTotalAmount(['eur 10', 'rub 5', 'usd 8', 'rub 7'], 'rub'));
console.log(getTotalAmount([], 'usd'));
