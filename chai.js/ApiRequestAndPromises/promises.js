// Q and Bluebird library as a promise  are mostly used when ES6 is not introduced
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();//used to connect with .then, without it can;t call .then 
    }, 1000)
})
//for resolve use .then and for error use .catch
promiseOne.then(function () {
    console.log("Promise consumed");
    console.log("============================================================");
})

new Promise(function (res, rej) {
    setTimeout(function () {
        console.log("Async task two");
        res();
    }, 1000)
}).then(function () {
    console.log("Async two resolved");

    console.log("============================================================");
})

new Promise(function (res, rej) {
    setTimeout(function () {
        console.log("Async task three");
        res();
    }, 1000)
}).then(function () {
    console.log("Async three resolved");
    console.log("============================================================");
})


//==========================================
//reject case

const promiseFour = new Promise(function (res, rej) {
    setTimeout(function () {
        res({ username: "Solo", email: "solo@email.com" })
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user);
    console.log("============================================================");

})

//=================================================

const promiseFive = new Promise(function (res, rej) {
    setTimeout(function () {
        let error = true
        if (!error) {
            res({ username: "Successful" })
        }
        else {
            rej('Error  : something went wrong')
        }
    }, 1000)
})

//chaining
promiseFive.then((user) => {
    console.log(user);
    return user.username;
})
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {console.log("The Promise is either resolved or rejected");  
        console.log("===============================================================");
        
     })

//====================================================================
//async await  and have to try catch when using it
const promiseSix = new Promise(function(res, rej){
    setTimeout(function () {
        let error = true
        if (!error) {
            res({ username: "javascript" })
        }
        else {
            rej('Error  : JS went  wrong')
        }
    }, 1000)
});

async function consumePromiseSix(){
    try {
        const response = await promiseSix
        console.log(response);
    } catch (error) {
        console.log(error); 
    }
    console.log("===============================================================");
    
}
consumePromiseSix()