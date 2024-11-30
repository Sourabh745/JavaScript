
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})// now you can get the name when iterating the object

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
