//var is not used in javascript mostly
let a = 300 

if(true){
    let a = 10
    const b = 20
    //var c = 30
}

//console.log(a);
//console.log(b);
//console.log(c);
 // see it have to print c =300 but i print 30 thats why we dont use var 
 //because it ignore scope

// var a = 233; // you can redeclared a ; var a = 23
// let b = 12; // you cannot redeclared it in one scope and it shows error

console.log(a);

const str = "sourabh"
console.log(str.charAt(0).toUpperCase() + str.slice(1));
