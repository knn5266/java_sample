const arr1 = ['dog', 'cat', 'mouse'];
const arr2 = [...arr1];
arr1[0] = 'cow';
console.log(arr1); // ['cow', 'cat', 'mouse']
console.log(arr2); // []
