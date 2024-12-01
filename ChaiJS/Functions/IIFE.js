//Normal Execution
function hello() {
    console.log(` DB CONNECTED `);
}
hello();

// Immediately Invoked Function Expression (IIFE)
// IIFE is not only do execution immediately and to prevent global scope pollution(var / declaration)
// Important: you have to put ; to stop the iife otherwise it will cause error
(function chai() {
    console.log(` DB CONNECTED `);
}) (); 

( (name) => {
    console.log(` DB CONNECTED TWO ${name}`);
}) ('sourabh');

//semi colons are important when using IIFE