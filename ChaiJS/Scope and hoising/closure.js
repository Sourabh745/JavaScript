//CLOSURE : when return functin it just not return the function but also its lexical scope data

function makeFunc(){
    const name = "Chrome"
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = new makeFunc();
myFunc();