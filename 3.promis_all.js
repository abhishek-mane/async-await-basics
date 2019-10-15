// author : Abhishek Mane

/*
    People in a queue for movie using async/await : Using Promise.all()
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

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getCoke = new Promise((resolve, reject) => resolve('coke'));

    let [t, p, c] = await Promise.all([getTicket, getPopcorn, getCoke])
    console.log(`got ${t} ${p} ${c}`)

    return 'all done'
};

doTasks().then((msg) => {
    console.log(msg)
    console.log('Person 3 in')
})
// =============================================================================

console.log("Person 4 in")
console.log("Person 5 in")