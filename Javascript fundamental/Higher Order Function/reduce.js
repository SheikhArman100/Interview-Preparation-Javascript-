//? reduce->this method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.It also take the start value of acc as second parameter
const arr=[4,5,2,67,28]
const maxValue=arr.reduce(function(acc,curr){
   if (curr>acc){
    acc=curr
   }
   return acc

},0)
console.log(maxValue)




//! create object of an unique age
const objArr=[
  {
    id: 1,
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age:38
  }, {
    id: 2,
    firstName: "Kobe",
    lastName: "Bryant",
    age:50
  }, {
    id: 3,
    firstName: "Mesut",
    lastName: "Ozil",
    age:35
  }, {
    id: 4,
    firstName: "Steph",
    lastName: "Curry",
    age:38
  }, {
    id: 5,
    firstName: "Leo",
    lastName: "Messi",
    age:35
  }
];



uniqueAge=objArr.reduce(function(acc,curr){
   if (acc[curr.age]){
      acc[curr.age]=acc[curr.age]+1

   }
   else{
      acc[curr.age]=1
   }
   return acc
   

},{})
console.log(uniqueAge)


//! array to object
const numArr=[1,3,2,5,9]
const numObj=numArr.reduce(function(acc,curr){
   acc[`number_${curr}`]=curr
   return acc

},{})
console.log(numObj)


//!find out the oldest people from array
const peopleArr=[
  {
    id: 1,
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age:38
  }, {
    id: 2,
    firstName: "Kobe",
    lastName: "Bryant",
    age:50
  }, {
    id: 3,
    firstName: "Mesut",
    lastName: "Ozil",
    age:35
  }, {
    id: 4,
    firstName: "Steph",
    lastName: "Curry",
    age:38
  }, {
    id: 5,
    firstName: "Leo",
    lastName: "Messi",
    age:35
  }
];


const oldestPersonName=peopleArr.filter(function(x){
  age=peopleArr.reduce(function(acc,curr){
  if (curr.age>acc){
    acc=curr.age
  }
  return acc
},0)
  if (x.age===age){
    return x
    
  }
})
console.log(oldestPersonName)


//!