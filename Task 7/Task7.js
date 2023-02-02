const calculateAverage = (array) => 
{
    if(array.length === 0){return null}
    else
    {
        let j = 0;
        let m = 0;
        while (j < array.length){
        
            let a = 0;
        
        for(i = 0;i < array.length; i ++)
        {
            a = a + array[i];
            
        }
        m = a / array.length;
        j++;
    }
    return m;
    }
} 

const temp1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temp2 = [36,37.4,39,41,36.6];
const temp3 = [];

console.log(calculateAverage(temp1))
console.log(calculateAverage(temp2));
console.log(calculateAverage(temp3));
