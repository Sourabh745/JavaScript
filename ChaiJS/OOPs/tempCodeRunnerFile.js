let myName = "sourabh     "

Object.prototype.trueLength = function(){
    return this.trim().length;
  //The this keyword refers to the object the method is called on.
//Since you're calling trueLength on myName, which is a string, this inside trueLength refers to myName.

}
console.log(myName.trueLength()); // create your own method


//========================================================================
let hero = ['spiderman', 'thor']

let heroPowers = {
    spiderman: "sling",
    thor: "hammer",

    getSpidySling: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// create your prototype/function in object so that everyone can access it
Object.prototype.sourabh = function(){
    console.log(`Sourabh is present in all objects`);
}

//now creating another one but this child of a object
Array.prototype.heySourabh = function(){
    console.log(`Sourabh saying hello`);
}

hero.sourabh()
heroPowers.sourabh()
//heroPowers.heySourabh() // can't access it because only Array type can access it 
hero.heySourabh() // running 

//===============INHERITANCE=================

//older way
const Users = {
    name: "Sourabh",
    email: "sourabh@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    //__proto__: TeachingSupport // now you can borrow the property of TeachingSupport
}

Teacher.__proto__ = Users
//=========================================

//Modern way
Object.setPrototypeOf(TeachingSupport, Teacher) //setPrototypeOf(child, parent)
console.log(TeachingSupport.makeVideo);
console.log(TASupport.isAvailable);
