const get = (array, index, defaultt = null) => 
{
    if(index <= array.length - 1 && index >= 0){return array[index]}
    else if ((index > array.length - 1 || index < 0) && defaultt !== null) {return defaultt}
    else{return defaultt}
    
}


const cities = ['moscow', 'london', 'berlin', 'porto'];

console.log(get(cities, 1)); 
console.log(get(cities, 0)); 
console.log(get(cities, 4));
console.log(get(cities, 10,'paris'));
console.log(get(cities, -1, 'oops')); //oops 
