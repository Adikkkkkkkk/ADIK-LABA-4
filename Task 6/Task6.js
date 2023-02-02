const CalculateSum = (array) => 
{
    let sum = 0;
    for(i = 0; i < array.length; i ++)
    {
        if(array[i] % 3 === 0)
        {
            sum = sum + array[i]; 
        }
    
    }
    return sum;
}

const sum1 = [8,9,21,19,18,22,7];

console.log(CalculateSum(sum1));

const sum2 = [2,0,17,3,9,15,4];

console.log(CalculateSum(sum2));