
function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
}
//sayMyName()

//=====================================

// function addNumbers(num1, num2){ // these are called parameter
//     console.log(num1+num2);
// }
// addNumbers(); //OUPUT: NaN
// addNumbers(3,4) // OUTPUT : 7
// addNumbers(3, "4"); // OUTPUT : 34 
// addNumbers(3, "a") // OUTPUT : 3a
// addNumbers(3, null) // OUTPUT : 3

// const result = addNumbers(1,1)
// console.log("Result: ",result); // it is undefined because function is not returning anything


//  ==========================addNumbers(argument1, argument2)=============================

function addNumbers(num1, num2){ // these are called parameter
    let result = num1+num2
    return result
    // or directly return num1+num2
}

const result = addNumbers(1,1)
//console.log("Result: ",result); // it is undefined because function is not returning anything

//===================================================

function loginUserMessage(username){
    if(username === undefined || !username){ // its same 
        return `Please enter a username`
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sourabh"))
console.log(loginUserMessage())
// if you don't pass any argument to a function it return undefined not null



