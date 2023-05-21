var containsDuplicate = function (nums) {
    //! my solution=>takes to many times (5542ms)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             return true
    //         }

    //     }
    // }
    // return false
    

    //*Solution i got from others
     const set =new Set(nums)
     if (set.size!==nums.length){
        return true
     }
    return false
     






};
const nums = [1, 2, 3]
console.log(containsDuplicate(nums))