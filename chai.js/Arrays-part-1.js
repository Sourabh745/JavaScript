//array
// Javascript array are resizable not like in java they are fixed there
const myArr = [0,1,2,3,4,5]

//Javascript arrays.copy operations create shallow copy rather than deep copy

// deep copy
console.log("DEEP COPY");

const json = {
    name : "sourabh",
    address : { city : "chandigarh" }
};

const jsonObject = JSON.parse(JSON.stringify(json));
console.log(jsonObject.address.city);
jsonObject.address.city = "Bangalore" // doesn't affect original object 

console.log(jsonObject.address.city);
console.log(json.address.city);

console.log();
console.log("SHALLOW COPY");

// shallow copy
const json1 = {
    name : "sourabh",
    address : { city : "chandigarh" }
};

const jsonObject1 = {...json1}; // spread operator that copy the data of object in a new one 

jsonObject1.address.city = "Bangalore";// affect original object 

console.log(jsonObject1.address.city);
console.log(json1.address.city);


