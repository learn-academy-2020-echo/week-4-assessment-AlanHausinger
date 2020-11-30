// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]
// Very very very confusing! I started by creating a funcion that takes an array as an argument.
const shuffle = (array) => {
    //if array is empty
// Then I set my if statement when my array is empty, you can set it equal to 0, [],or ""
    if (array=== 0) {
        return "The array is empty."

// Start by using .shift()
    } else {
        array.shift()
// Set a basic for lop,
        for (let i=0; i<array.length; i++) {
// create a local variable that will find a random index and suffle my array.
// Math.floor(Math.random()) will return a random integer from my array.
                randIndex = Math.floor(Math.random()*array.length)
// switch the position of value at random index with the value at i
// create a new local variable that will hold my array and randInex
                temp = array[randIndex]
                array[randIndex] = array[i]
                array[i] = temp
            }
        return array
    }
}
console.log(shuffle(collections))
console.log(shuffle(collections))
console.log(shuffle(collections))
console.log(shuffle(collections))
console.log(shuffle(collections))




// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

let sumedCubes = [];
   for ( var i = 0; i < sumedCubes.length;i++) {
      sumedCubes[i] = sumedCubes[i]*sumedCubes[i]*sumedCubes[i];
   }

console.log(sumedCubes(cubeAndSum1));




// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const myFunction = (array) => {
    let max = (Math.min(...array))
    let min = (Math.max(...array))
    return [max,min]
}

console.log(myFunction(nums1))
console.log(myFunction(nums2))




// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

function firstLetterUppercase (input) {
  var res = "";
  for (i=0; i < input.length; i++) {
     res += i % 2 == 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
  }
  return res;
}

console.log(firstLetterUppercase(testString1));
console.log(firstLetterUppercase(testString2));





// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]

const noDupes = (arr1, arr2) => {
    // lets create a local variable that will hold our new arrat
    let singleArray = new Set ([...arr1,...arr2])
    return [...singleArray]
}
console.log(noDupes(arr1,arr2));





// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
