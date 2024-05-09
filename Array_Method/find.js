const scores = [30,10,60,40,50,90,80];

const firstEle = scores.find((score) => {

    return score > 50;
});

console.log(firstEle);