//? filter-> this Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. 
const arr=[4,5,2,67,28]
const filterArr=arr.filter(function(x){
    return x<5 || x>50
})
console.log(filterArr)