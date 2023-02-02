
const addPrefix = (array, pref) => 
{
    for(i = 0; i < array.length; i += 1)
    {        
    array[i] =  pref + ' ' + array[i];        
    }
    return array;
}

const Boyznamez = ['Jake', 'Paul', 'Finn'];
const Girlznamez = ['Anne', 'Cris', 'Ella'];


console.log(addPrefix(Boyznamez, 'Mr'));
console.log(addPrefix(Girlznamez, 'Miss'));
console.log(addPrefix(['a', 'b', 'c', 'd'], 13));


