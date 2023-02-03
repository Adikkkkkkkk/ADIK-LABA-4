const getSameParity = (numArray) => 
{

    if(numArray.length === 0){return numArray}
    else
    {
    const result = [];
    for (i = 0; i < numArray.length; i++)
        {
         
         if(numArray[0] % 2 === 0)
         {
            if(numArray[i] % numArray[0] === 0)
            {
               if(numArray[i] < 0)
               {
                result.push(Math.abs(numArray[i]))
               }
               else
               {
                result.push(numArray[i])
               }
            } 
            
         }
         else if(numArray[0] % 2 !== 0)
         {
            if(numArray[i] % 2 !== 0)
            {
                if(numArray[i] < 0)
               {
                result.push(Math.abs(numArray[i]))
               }
               else
               {
                result.push(numArray[i]);
               }                
            }
         }
         
         
        }
    
        return result;
    }
} 

const numberz = [1,2,3];
const numberz2 = [1,6,8,5];
const numberz3 = [2,6,8,7,4];
const numberz4 = [-1,-2,-3];

const empty = [];

console.log(getSameParity(numberz));
console.log(getSameParity(numberz2));
console.log(getSameParity(numberz3));
console.log(getSameParity(numberz4));
console.log(getSameParity(empty));

