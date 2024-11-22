//const tinder = new Object() //singleton object
const tinder = {} // non singleton object

tinder.id = "123a"
tinder.name = "Samuel"
tinder.isLoggedIn = false

//console.log(tinder);


//===========================================================

const regularUser = {
    email: "sourabh5@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Sourabh",
            lastname : "Thapliyal"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: 'a' , 2: 'b'}
const obj2 = {2: 'c', 3: 'a' , 4: 'b'}

//const obj3 = {obj1, obj2} //OUTPUT: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign({}, obj1, obj2) // OUTPUT: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 // {} its optional but good to use because it tell all are in under {} 
// if key match in two object later one will override first one
// assign(first is target , object , object , ...) means all object are merging in target
// it is deep copy changes in obj1 doesn't affect obj3

const obj3 = {...obj1, ...obj2}

console.log(obj3);

//============== show only key or values================
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder)); // print key value in array

console.log(tinder.hasOwnProperty('isLoggedIn')); // check if key is exist or not 

