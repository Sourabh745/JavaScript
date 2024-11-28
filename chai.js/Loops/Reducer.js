  const num = [1,2,3]

  //function
//   const total = num.reduce(function(acc, currval) {
//     console.log(`acc : ${acc}, currval  ${currval}`);
//     return acc + currval
//   }, 0) // 0 is acc initial value

const objArr = [
    {
        itemName: "Java Course",
        price: 999
    },
    {
        itemName: "Python Course",
        price: 799
    },
    {
        itemName: "Cpp Course",
        price: 699
    }
]

const total = objArr.reduce( (acc, item) => (acc+item.price), 0)
console.log(total);
const totalResult = objArr.reduce((acc, currval) => {
    if(currval.price > 800){
        acc.push(currval)
    }
    return acc
  }, [])

console.log(totalResult);


