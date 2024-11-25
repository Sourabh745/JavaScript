const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach ((item) => {
    //console.log(item);
    return item;
})
// for each not return values
//console.log(values);

//=================================

const myNums = [ 1,2,3,4,5,6,7,8,9,10]
 
// filter return so it hold a value in variable
const newNums = myNums.filter( (num) => num > 3)
//console.log(newNums);


const number = []
myNums.forEach( (num) => {
    if(num > 4){
        number.push(num)
    } 
    //return number;
})
//console.log(number);


//====================================

const NUM = [1,2,3,4,5,6,7,8,9,10]

const result = NUM.map( (num) => num+10)
console.log(result);

NUM.forEach( (num) => {
    console.log(num+10);
})