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

var names = ["Susis", "Ben", "Mark", "Franklin"] // given array

var shortNames = names.filter(function (val, i, arr) {
  return val.length < 5 // The function that gets used with .filter should return true or false. 
})
// .filter will irriate through an array and check each value against the function. If the value return true, the value will be passed into a new empty array. .filter, like .map works by creating an empty array and pushing values to it.
// var shortNames will be assigned a vaule of ["Ben", "Mark"] for this example.

myObj = {
  code: "awesome",
  boredom: "lame"
}

delete myObj.boredom // delete key word, followed by the object we want to delete from "dot" the property we want to remove.

var work = {
  sucess: "great",
  mistake: "woops"
}

work.mistake = undefined // this would only change the value of mistake. var work would return {sucess: "great", mistake: undefined}.

delete work.mistake // this will remove that property from the object completely. var work would then retrun {sucess: "great"}. Do you see the difference? 

delete work['success'] // you can also use bracket notation to remove properties. var work would now return an empty object, { }.

var backpack = {
  oldLaptop: "slow", 
  oldLunch: "moldy",
  pencil: "sharp"
} // given object

var oldStuff = ["oldLaptop", "oldLunch"] // given array

for ( var i = 0; i < oldStuff.length; i++) {
  delete backpack[ oldStuff[i] ]
} // a for loop has been created to go through the given object and remove all items within the array. Note that bracket notation has been used. *** This is important when passing in variables in as parameters. ***
// This for loop eill return {pencil: "sharp"} for the value of var backpack.

var obj = {
  name: "Joseph"
} // given object

var obj2 = obj // this DOES NOT make a copy of var obj. It set the value of var obj2 equal to the vlaue of obj. They will be one in the same. 

obj.name = "Joe"
// if we update name in obj, it will also update that same parameter in obj2. Therefore, obj2.name will also have an updated value of "Joe". Do you see why this may cause problems?

var obj3 = Object.assign({}, obj) // Object.assign (*** capital "O" ***) is a built-in JS construct. The parameters are what we want to assign the object TO (can be an empty onject as shown, or another existing object), and what we want to copy FROM (can be multiple objects seperated by commas)
// obj.name = "Sue"
// obj3.name = "Joseph"
// If we update obj.name, obj3.name will remain unchaned as it is a copy. 

var cat = {
  name: "Fluffles"
}

var tuna = {
  container: "can"
}

var dogFood = Object.assign(cat, tuna)
// final result will be a nerging of the two objects. cat got updated to {name: "Fluffles", container: "can"}. And now, var dogFood is equal to the new cat object as well. 

cat.name = "Pookie"// If we update cat.name, we will also be updating dogFood.name to the new value. If this confuses you read the comment directly above. 

var dogFood2 = Object.assign({}, cat, tuna)// If you really want to copy, you need to remeber to *** add the EMPTY object first ***. That way we dont make changes to all copies. We just change the ones we want to.

var favorites = {
  color: "red",
  flavor: "vanilla"
} // given object

for (var prop in favorites) {
  console.log(favorites[prop])
} // var prop will represent the key from the object, one at a time. in the above example: the value of prop in the first ittiration would be 'color'. The second time through it would be 'flavor' 
// *** It is very common to use bracket notation becasue prop is always a string. brackets all us to pass in a varable as a string. *** 

//=================== Lecture notes =======================================

// for in loops
// for (.... in .....) {}
// for (var key in ...) {}
// for (var key in object) {}
// ******* THINK OF 'KEY' AD 'I' IN A FOR LOOP ********

var obj = {
  x: 7,
  y: 2,
  z: 2
}

for (var key in obj) {
  key === x / y / z
}

for (var key in obj) {
  var value = obj[key] // key is a string representing each 1 a

}// ******* Write code below ******* 
/*Problem
Create a function called truthyFalsy that takes a destructured object as it's parameter.The properties of this object will be number and string. One of these properties will be truthy, the other will be falsy. Return the value that is truthy. */   

var truthyFalsy = ({number, string}) => {
  if (number) {
    return number
  } else if (string) {
    return string
  }
  //return number || string; - *** This one line repkaces the entire if statement abovt!
}

