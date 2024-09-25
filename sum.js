const nums = [1, 3, 6, 8, 1];
const nums2 = [1, 5, 2, 3, 4, 7, 7];

function sum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }

  return result;
}

const result = sum(nums);
