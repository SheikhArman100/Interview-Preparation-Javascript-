//?map->this method allows you to iterate over an array and modify its elements using a callback function
const arr=[4,5,2,67,28]
const binaryArr=arr.map(function (x){
    return x.toString(2)
})
console.log(binaryArr)





//!2nd use case->Reformat objects in an array
const objArr=[
  {
    id: 1,
    firstName: "Cristiano",
    lastName: "Ronaldo"
  }, {
    id: 2,
    firstName: "Kobe",
    lastName: "Bryant"
  }, {
    id: 3,
    firstName: "Mesut",
    lastName: "Ozil"
  }, {
    id: 4,
    firstName: "Steph",
    lastName: "Curry"
  }, {
    id: 5,
    firstName: "Leo",
    lastName: "Messi"
  }
];
const fullnameArr=objArr.map(value=>{
    newObjArr={...value}
    newObjArr["fullname"]=`${value.firstName} ${value.lastName}`
    return newObjArr

})
console.log(fullnameArr)


//!Callback certain elements in an array
const numArray = [1, 2, 3, 4,53,29];
const sqrts = numArray.map( (num) => {
  return num % 2 === 1 ? Math.sqrt(num): num
 } );
 console.log(sqrts)





//!Convert a String to an Array
const language = "JavaScript"
const map = Array.prototype.map
const letters = map.call(language, eachLetter => {
    return `${eachLetter}`
})

console.log(letters)




//!Iterate through a NodeList
let NodeList = document.querySelectorAll('p');

let values = Array.prototype.map.call(NodeList, function(obj) {
  return obj.value
})


//!Render a List in React.js
const numbers = [1,2,3,4,5];
const listItems = numbers.map( (number) =>
<li> {number} </li>
);

