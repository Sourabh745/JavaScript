
// ... are called spread and rest operator according to its use case

function calculateCartPrice(a,...num1){ //rest operator = wrap the arguments in array
    return num1
}

//console.log(calculateCartPrice(2,4,8));


//==========================================================

const user = {
    username: "shubham",
    price: 1
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)
handleObject({
    username: "lol",
    price : 12
})

//====================================================

const newArr = [100,200,300,400,500]

function returnSecondValue(getArr){
    return getArr[getArr.length-2]
}

console.log(returnSecondValue(newArr));

