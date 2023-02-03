const buildDefinitionList = (array) => 
{
     if(array.length === 0){return ''}
     else
     {
      const arrDef = [[[],[]],[[],[]]];
      
      for(i = 0; i < array.length; i++)
    {
        
              
        arrDef[i][0] = `<dt>${array[i][0]}</dt>`;
        arrDef[i][1] = `<dd>${array[i][1]}</dd>`;
          
       
    }
    
    const convertArr = arrDef.join('');
        const result = `<dl>${convertArr}</dl>`; 
        return result;
     }
} 


const skyrimRaces = [
    ['Каджиты ', 'Кошачья раса каджитов родом из Эльсвейра. Именно там производят лунный сахар, из которого можно гнать скуму'],
    ['Норды', 'Cкайрим — родина нордов, яростных и сильных людей, которые ценят честь и доблесть в бою']
];

console.log(buildDefinitionList(skyrimRaces));