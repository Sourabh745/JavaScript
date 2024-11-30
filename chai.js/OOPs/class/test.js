const a = Math.PI;
//console.log(Math.floor(a));

//lets change the value of PI instead of getting 3.14...

//Object.getOwnPropertyDescriptor you can check the property of inbuilt function or value

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")// (Module, its  property)

//console.log(descriptor);

//===========================

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(("code phat gya"));
        
    }
}
//console.log(chai);

//console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// OUTPUT : 
//{
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false // enumerable stop iteration
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}