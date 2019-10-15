// author : Abhishek Mane

/*
    People in a queue for movie using async/await
*/

const getTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
    }, 2000)
});

console.log("Person 1 in")
console.log("Person 2 in")

// =============================================================================
doTasks = async () => {

    t = await getTicket;
    console.log(`got a ${t}`)

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    p = await getPopcorn;
    console.log(`got a ${p}`)

    const getCoke = new Promise((resolve, reject) => resolve('coke'));
    c = await getCoke;
    console.log(`got a ${c}`)

    return 'all done'
};

doTasks().then((msg) => {
    console.log(msg)
    console.log('Person 3 in')
})
// =============================================================================

console.log("Person 4 in")
console.log("Person 5 in")