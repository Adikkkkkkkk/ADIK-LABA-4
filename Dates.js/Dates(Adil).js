const getWeekends = (input) => 
{
    let weekends = ['saturday','sunday']
    const short1 = weekends[0][0] + weekends[0][1] + weekends[0][2];
    const short2 = weekends[1][0] + weekends[1][1] + weekends[1][2];

    if(input === 'short'){return short1 + ' ' + short2}
    else if(input === 'long'){return weekends[0] + ' ' + weekends[1]}
    else {return ''}
}


console.log(getWeekends());
console.log(getWeekends('long'));
console.log(getWeekends('short'));

