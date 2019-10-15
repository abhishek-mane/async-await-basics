// author : Abhishek Mane

/*
    People in a queue for movie using promises
*/

const getTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
    }, 2000)
});

console.log("Person 1 in")
console.log("Person 2 in")

getPopcorn = getTicket.then((t) => {
    console.log(`got a ${t}`);
    console.log('I need popcorn');
    return new Promise((resolve, reject) => resolve('popcorn'));
});

getCoke = getPopcorn.then((p) => {
    console.log(`got a ${p}`);
    console.log('I need a coke');
    return new Promise((resolve, reject) => resolve('coke'))
});

getCoke.then((c) => {
    console.log(`got a ${c}`);
    console.log('Person 3 in')
})

console.log("Person 4 in")
console.log("Person 5 in")