// Sort interger
const scores = [30,10,60,40,50,90,80];
// scores.sort();
scores.sort (( a, b) => a - b);
console.log(scores);

// sort name
const names = ['soumik','subho','sovan','Amlan','Tamal'];
names.sort ( (a, b) => a - b);
console.log(names);

//Sort object
const players = [
    {name: 'Soumik', score: 30},
    {name: 'Soumik2', score: 100},
    {name: 'Soumik3', score: 70},
    {name: 'Soumik4', score: 30},
    {name: 'Soumik5', score: 20},

];
            // Function to sort the object inn decending order
players.sort((a ,b) => {
    if( a.score > b.score){
        return -1; // Don't do any operation
    }
    else if(  a.score < b.score ){
        return 1; // Perform swap operation
    }
    else{
        return 0;       
    }
});

console.log(players);


// Short version of the above code

// players.sort(( a, b) => {
//     return b.score - a.score;
// });

// console.log(players);
