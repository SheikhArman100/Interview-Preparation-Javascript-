//? reduce()is an array method that executes an callback function on each element of an array and returns a single value.The single return value could be number,object etc.It doesn't change the original array

//reduce method
// const array=[]

// const total=array.reduce((prevValue,currentValue,currentIndex,array)=>{   //!currentIndex,array is noncompulsory
//     return value

// },initialValue) //initialValue is considered as the prevValue for the first element of the array


// //*example-1 => sum of an array
// const numbers=[3,5,8,2,9]
// const sum=numbers.reduce((prevValue,currValue)=>{
//     console.log(`previous value : ${prevValue}`)
//     console.log(`current value : ${currValue}`)
//     return prevValue+currValue
// },7)

// console.log(sum)



//*example-2 => find the oldest person
// const people=[
//     {
//         name:"Arman",
//         age:24
//     },
//     {
//         name:"Megha",
//         age:25
//     },
//     {
//         name:"Tanisha",
//         age:17
//     },
//     {
//         name:"Zisan",
//         age:27
//     },
//     {
//         name:"Mou",
//         age:22
//     }

// ]

// const OldestPerson=people.reduce((prevValue,currValue)=>{
//     return currValue.age>prevValue? currValue.age:prevValue

// },0)

// console.log(OldestPerson)


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
