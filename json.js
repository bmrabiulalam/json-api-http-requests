const user = {
    id: 234,
    name: 'Boltu',
    bou: {
        name: "Tuntuni",
        baccha: 12
    },
    friends: ['se', 'ke', 'te'],
    friendAge: [12, 23, 34]
}

const userJSON = JSON.stringify (user);
console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);