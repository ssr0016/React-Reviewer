

let months = ["Jan", "March", "April", "June"]


//5.slice - The slice() method returns a shallow copy a
//portion of an array into a new array object selected from start to end
//Note: hindi lang positive values inaaccept nito pati negative value

console.log(months.slice(1,3))

// const nums1 = [1, 2, 3, 4, 5, 6];
// console.log(nums1.filter((n) => n % 2 === 0));

const nums1 = [1, 2, 3, 4, 5, 6];
const even = nums1.filter((n) => n % 2 === 0);
console.log(even.slice(0, 3));