const myArr=[1,4,"Arman",6,8]

myArr.push(3) // add element to the end of array
myArr.pop()   //remove element from the end of the array

myArr.unshift(4) // add a element to the start of an array
myArr.shift()     //remove an element from the start of an array

const array1=[1,3,5]
const array2=["ronaldo","messi","curry"]
const array3=array1.concat(array2) //merge two array and return a new array
// console.log(array3)

const sliceArr =array3.slice(2,4) //just return a part of array as a new array.splice(from,until) note: 2nd parameter should be until+1
// console.log(sliceArr)

array3.splice(2,2,"Lebron") //splice(start_index,how_many_elements_will_be_deleted,...new_element_added)
console.log(array3)

//forEach((currentElement,index))
const users=["student","teacher","guard"]
users.forEach((user,index)=>{
    console.log(`${index}=>I am a ${user}`)
   
})

//map
const arr=[4,5,2,67,28]
const binaryArr=arr.map(function (x){
    return x.toString(2)
})
console.log(binaryArr)

//filter
const arr2=[4,5,2,67,28]
const filterArr=arr2.filter(function(x){
    return x<5 || x>50
})
console.log(filterArr)

//reduce
const arr3=[4,5,2,67,28]
const maxValue=arr3.reduce(function(acc,curr){
   if (curr>acc){
    acc=curr
   }
   return acc

},0)
console.log(maxValue)

