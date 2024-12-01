let myDate = new Date();
// console.log(myDate.toString()); // OUTPUT : Thu Nov 21 2024 18:32:47 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); //OUTPUT : Thu Nov 21 2024

// console.log(myDate.toISOString()); //OUTPUT : 2024-11-21T13:04:38.778Z

// console.log(myDate.toJSON()); //OUTPUT : 2024-11-21T13:04:38.778Z

// console.log(myDate.toLocaleString()); //OUTPUT : 21/11/2024, 6:34:38 pm

// console.log(myDate.toLocaleDateString()); //OUTPUT : 21/11/2024

// console.log(myDate.toLocaleTimeString()); //OUTPUT : 6:34:38 pm

// console.log(myDate.toTimeString()); //OUTPUT : 18:34:38 GMT+0530 (India Standard Time)

// console.log(myDate.toUTCString()); //OUTPUT : Thu, 21 Nov 2024 13:04:38 GMT

// console.log(myDate); //OUTPUT : 2024-11-21T13:04:38.778Z

// console.log(typeof myDate); // OUTPUT : Object

//---------------------------------------------------------------------

let myNewDate = new Date(2024, 0, 23 , 5,3);// month start from 0-11
//console.log(myNewDate.toLocaleString()); // OUTPUT : 23/1/2024, 5:03:00 am

let myNewDate1 = new Date("03-11-2002");// month start from 0-11
//console.log(myNewDate1.toLocaleString());
//console.log(myNewDate1.getDay());


//function for checking exact same time for example in quizs, polls

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));


//-----------------------To get only one from time, date, date, ..... ---------------------------
let aNewDate = new Date();
console.log(aNewDate.getDate());

///============interesting thing =======================
aNewDate.toLocaleString('default',{
    weekday: "long"
})
// learn about it more later
