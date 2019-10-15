// author : Abhishek Mane

/*
    People in a queue for movie using async/await : Handling Errors try/catch
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

    let error;

    try {
        t = await getTicket;
        console.log(`got a ${t}`);

        const getPopcorn = new Promise((resolve, reject) => reject('popcorn'));
        p = await getPopcorn;
        console.log(`got a ${p}`);

        const getCoke = new Promise((resolve, reject) => resolve('coke'));
        c = await getCoke;
        console.log(`got a ${c}`);
    } catch (e) {
        error = e
    }

    throw error;
};

doTasks().then((msg) => {
    console.log(msg)
    console.log('Person 3 in')
}).catch((e) => {
    console.log(`Person 3 cannot go in, error => ${e}`)
})
// =============================================================================

console.log("Person 4 in")
console.log("Person 5 in")