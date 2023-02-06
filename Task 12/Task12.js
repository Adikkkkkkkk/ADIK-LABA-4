const countUniqChars = (str) => 
{
    let counter = 0;
    let result = '';
    
    for(const char of str)
    {
      if(result.indexOf(char) === -1)
      {
        result += char;
        counter++;
      }
    }
    return counter
}
    

console.log(countUniqChars('HELLO WORLD!!!'))