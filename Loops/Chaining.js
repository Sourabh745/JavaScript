//when you more than one method together
const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum
            .map( (num) => num*10 )
            .map( (num) => num+1)
            .filter( (num) => num > 45)

console.log(newNum);
//OUTPUT: [ 51, 61, 71, 81, 91, 101 ]