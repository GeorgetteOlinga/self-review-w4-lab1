//--------1--------------------------------------------------
//Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.

function minusOne(num){
   console.log(num-1)// using any number as an argument, we want the function to print this equation (argument - 1)
};
minusOne(10); // => we get 9 when calling the function
minusOne(100);       // 99
minusOne(Infinity);  // Infinity

//------------------2-----------------------------------
//Write a function (makeSentence) that takes three parameters and concatenates them into a fully formed sentence
// function makeSentence(x1,x2,x3){
//      console.log(x1+" "+x2+ " "+x3)
// }
// makeSentence('I', 'want', 'chimichangas'); // => I want chimichangas

//print this sentence => => 'Oh boy, do I want chimichangas or what?'
function makeSentence(x1,x2,x3){
    console.log("Oh boy, do"+ " "+x1+" "+x2+ " "+x3+" "+"or what?")
}
makeSentence('I', 'want', 'chimichangas'); // => Oh boy, do I want chimichangas or what?
makeSentence('georgette', 'is', 'committed') // => Oh boy, do georgette is committed or what?
makeSentence('Doug and Christina', 'will be', 'impressed with Georgette determination')
// => Oh boy, do Doug and Christina will be impressed with Georgette determination or what?

//----------3--------------------------------------------------------
// 1---Write a function called getLastElement that takes a parameter arr.
/*   2----Invoke the function with an array as the argument.
example of array:  [1, 2, 3, 4, 5, 6] or ['a', 'b', 'c'] or also [[1, 2, 3], [4, 5, 6]]*/
//  3----The function should print the last element within the array
//        Hint: arr[arr.length - 1]-->
function getLastElement(arr){
    console.log( arr[arr.length - 1])//show the last elt of the array knowing that the index number is arr.lenght-1
}
//invoke = calling the function
getLastElement([1, 2, 3, 4, 5, 6]) //=>  6
getLastElement(['a', 'b', 'c']);       //=> c
getLastElement([[1, 2, 3], [4, 5, 6]]); //=> [ 4, 5, 6 ]