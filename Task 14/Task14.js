const getMax = (arr) =>
{
    let result = arr[0];
    if(arr === null){
      return arr;
    }
    else{
      for(const i of arr){
        if(result < i){
          result = i;
        }
      }
    }
    return result;
  };
  
  let arr = [11,10,8,7];

  console.log(getMax(arr))