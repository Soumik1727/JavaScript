// Filter method

const scores = [10 ,20 ,30 ,40 ,50 ,5];

const filteredArray = scores.filter((score) => {
    return score > 30;
});

console.log(filteredArray);

const users = [
    {name: 'Soumik1', premium: false },
    {name: 'Soumik2', premium: true },
    {name: 'Soumik3', premium: false },
    {name: 'Soumik4', premium: true },
    {name: 'Soumik5', premium: false }
];

const premiumUsers = users.filter((user) => {
    return user.premium;
});

console.log(premiumUsers);