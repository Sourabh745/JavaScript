function one(){
    const username = "sourabh"

    function two(){
        const website = "youtube" 
        //console.log(username);
    }
    
    //console.log(website);  
    two()
}
one()

//===============================================================
// const number = "20"
// if(number == 20){ // == compare value not its type
//     console.log("hi");
// }

//==========================INTERESTING=======================================

//HOISTING

//functions 
console.log(addOne(5)); // can be called before its initialization

function addOne(value){
    return value+1
}
 
//called expressions it is also functions
console.log(addTwo(5)) // expression can't be called before its initialization/DECLARATION
const addTwo = function(value){
    return value+2
}