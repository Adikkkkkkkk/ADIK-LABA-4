 const swap = (array) => 
{
   
    if(array.length === 0 || array.length === 1){return array}
    else if(array.length === 2)
    {
        array = [array[1],array[0]]
        return array;
    }
    else
    {
      let i = array[0];
      array[0] = array[array.length - 1];
      array[array.length - 1] = i; 
        return array; 
    }
    
}
const names = ['john','mike','smith'];

console.log(swap(names));
console.log(swap([]));
console.log(swap([1]));
console.log(swap([1,2]));
console.log(swap(['one','two','three']));
console.log(swap(['one','two','three','four']));


