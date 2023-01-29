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


//*example-1 => sum of an array
const numbers=[3,5,8,2,9]
const sum=numbers.reduce((prevValue,currValue)=>{
    console.log(`previous value : ${prevValue}`)
    console.log(`current value : ${currValue}`)
    return prevValue+currValue
},7)

console.log(sum)

//*example-2 => find the oldest person
const people=[
    {
        name:"Arman",
        age:24
    },
    {
        name:"Megha",
        age:25
    },
    {
        name:"Tanisha",
        age:17
    },
    {
        name:"Zisan",
        age:27
    },
    {
        name:"Mou",
        age:22
    }

]

const OldestPerson=people.reduce((prevValue,currValue)=>{
    return currValue.age>prevValue? currValue.age:prevValue

},0)

console.log(OldestPerson)

//*example-3 => return first letter of name

const people=[
    {
        name:"Sheikh MD Arman",
        age:24
    },
    {
        name:"Cristiano Ronaldo",
        age:25
    },
    {
        name:"Leo Messi",
        age:17
    },
    {       name:"Steph Curry",
        age:27
    },
    {
        name:"Lebron James",
        age:22
    }

]
const shortname=people.reduce((prevValue,currValue,index,array)=>{
    name_array=currValue.name.split(" ")
    full_short_name=""
    for(let i=0;i<name_array.length;i++){
        first_letter=name_array[i][0]
        full_short_name=full_short_name+first_letter
    }
    currValue=full_short_name
    index==array.length-1 ? part=currValue+"." : part=currValue+", "
    return prevValue+part
    


},'')
console.log(shortname)