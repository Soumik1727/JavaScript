const scores = [30,10,60,40,50,90,80];

const result = scores.reduce((acc,curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
},0);    //Initial value of accumulator = 0;

console.log(result);    // Output: 3

const scoress = [
    {player: 'Soumik', score: 20},
    {player: 'Soumik', score: 70},
    {player: 'Soumik3', score: 500},
    {player: 'Soumik', score: 100},
    {player: 'Soumik3', score: 90}
];

const soumikTotal = scoress.reduce(( acc, curr) => {
    if( curr.player === 'Soumik'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(soumikTotal);      // Output:  190