let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
var intersect = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        nums2.splice(j, 1);
        result.push(nums1[i]);
        break;
      }
    }
  }
  return result;
};
console.log(intersect(nums1, nums2));
