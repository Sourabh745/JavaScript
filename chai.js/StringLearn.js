const name = "Sourabh"
const count = "10"

//console.log(name+count+" value") //old way

console.log(`Hello my name is ${name} and my repo count is ${count}`) // new way use backtick(`) and $.

const a = "    123   "
const gameName = new String('Sohurabhs')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(9));// string index if index is not present then return empty space or line
console.log(gameName.at(9)); // string index if index is not present then return undefined
console.log(gameName.charCodeAt(9)); //string index if index is not present then return NaN
console.log(gameName.concat(a)); //add multiple stirngs 
console.log(gameName.endsWith('h'));// check a string endwith the char you provide or not return T or F
console.log(gameName.indexOf('h')); // return the first occurence position start with 0-str.length if duplicate found 
console.log(gameName.lastIndexOf('h')); // return the last occurence position start with 0-str.length if duplicate found
console.log(gameName.slice(2));//print output from position 2 and cut 1st two character for ex "sour" print "ur"
//console.log(gameName);

console.log(a.trim())
console.log(a.trimStart())
console.log(a.trimEnd())

const url = "https://sourabh.com/sourabh%20thapliyal"
console.log(url.replace('%20', '-'));
