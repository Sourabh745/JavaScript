//LEXICAL SCOPING : INNER FUNCTION HAVE ACCESS ON THE VARIABLE OF OUTER FUNTION NOT VICE-CERSA.


// function init(){
    //     let name = "Mozilla";

    //     function displayName(){
    //         console.log(name);
    //     }

    //     displayName();
    // }
    // init()

    // member var of fn can be accessed in the inner/nested function but not in different function that is not nested
    // variable can't be accessed outside the fn
    
    // A inner function will find the  value of the  var that is used in its scope if it is not found , then it search on its lexical scope 
    
    function outer(){
        let username = "sourabh"

        function inner(){
            let secret = "123secret"
            console.log(username);
        }

        function innerTwo(){
            console.log("innerTwo", username);
            console.log(secret);
        }

        inner();
        innerTwo();      
    }  
outer()
//Parent : outer   |  Children : inner , innerTwo
// child can take parent var but can't take var from each other