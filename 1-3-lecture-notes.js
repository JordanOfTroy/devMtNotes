// Pre-class "Reading"

var fruits = ["apple", "banana", "cherry", "apple"] // given example array

var bananaPlace = fruits.indexOf("banana")
// .indexOf return the index of the search parameter. In this case, var bananaPlace would be assigned a vlaue of 1.

var bananaPlace2 = fruits.indexOf("Banana")
// .indexOf is case sensative. "Banana" is not in the assigned array. Therefore, var bananaPlace2 would be assigned a value of -1

var bananaPlace2 = fruits.indexOf("apple")
// var bananaPlace2 will only be assigned a value of 0, as .indexOf only returns the first occurance of the search parameter in the string. Notice how there are two "apple" values? the first occurance is at index 0. 

var ages = [53, 50, 29, 22, 16] // given example array

ages.forEach(function (val, i, arr) {

}) // .forEach will go through each item (and its index) in an array, one at a time, and pass them into a function.

var result = ages.forEach(function (val, i, arr) {
  arr[i] = val +1
}) // the above function will add 1 to the value of every index in the array. resulting in [54, 51, 30, 23, 17]. However, that new array  *** WILL NOT *** be assigned to var result. .forEach does not retuen a value, var results will return "undefined". We need to use the third parameter (arr) to update our origonal array values. 

var ages2016 = [53, 50, 29, 22, 16] // given example array

var ages2017 = ages2016.map(function (element) {
  return element + 1
})
// .map works just like .forEach, but will return a new value. Think of .map as creating a new empty array, and puts the vlues in there one at a time.
// var ages2017 will equal [54, 51, 30, 23, 17], and will be a separate var from ages2016.

