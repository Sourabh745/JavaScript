const user = {
    username: "sourabh",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to site`);   
        console.log(this);
    }
    
}


//user.welcomeMessage()
// user.username = "load"
// user.welcomeMessage("file")
//console.log(this); // return {} empty object 
//the global object in browser is window 

//===========================================================================

// function hello(){
//     let usernames = "devil"
//     console.log("hi");
//     console.log(this.usernames); 
// }
// // you cannot use this context in function only in object
// hello()

//===========================================================================

//ANOTHER WAY TO DECLARE FUNCTION
// const apps = function(){
//     let name = "david"
//     console.log(this); // return global object
    
// }
// apps()

//ARROW FUNCTIONS = explicitly return
// const app = () =>{
//     let name = "david"
//      return name
//     //console.log(this); // return empty object
// }
// console.log(app())

//Arrow function implicit return
const app = (num1, num2) => num1+num2 
const apps = (num1, num2) => (num1+num2)

//console.log(app(2,8))
//console.log(apps(2,8))

//return object
//const addTwo = (a,b) => {username: "lol"} // return undefined
const addTwo = (a,b) => ({username: "lol"}) // return object
console.log(addTwo(4,5));
