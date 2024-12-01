// for of loop

//["", "", ""] // hta how you put string in array
//[{},{},{}] // hta how you put object in array

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }

// const greeting = ["Hi", "Hello", "konichiwa", "Hello World!"]
// for (const greet of greeting){
//     console.log(`Every String is ${greet}`);
// }


const greeting = "Hello World!"
for (const greet of greeting){
  //  console.log(`Every char is ${greet}`);
}

//MAPS

const map = new Map()
map.set('in', "India")
map.set('usa', "United state of America")
map.set('in', "indonesia") 
map.set('fr', "France")
map.set('fr', "Florida")
map.set('Fr', "France")

//console.log(map);
//OUTPUT:
// Map(4) {
//     'in' => 'indonesia',
//     'usa' => 'United state of America',
//     'fr' => 'Florida',
//     'Fr' => 'France'
//   }

for(const [key, value] of map){
    //console.log(key, ':-' , value);
}

//Objects are not iterable in map or FOR OF
const myObj = {
    'game1': "God of war",
    'game2': "Prince of persia",
    'game3': "NFS"
}

for(const [key, value] of myObj){
    console.log(key, ':-' , value);
    
}
