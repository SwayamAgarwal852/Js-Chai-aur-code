// Primitive datatypes

// Types - String,Number, BigInt, Boolean, null, undefined, Symbol
// null means 'empty'

const id = Symbol('123')
const id_2 = Symbol('123')
console.log(id === id_2) // returns false
const BigNumber = 3435689763542567896567809n // BigInt values aise declare karte hai

// Reference (non - primtive)
// arrays, Object, Function 

// arrays
const heros = ["Swayam", "Krish", "Yash"]
console.log(heros)

// objects

let myObject = {
    name : "Swayam",
    age : 20
}
console.log(myObject)

// fuction

const MyFunction = function(){
    console.log("Hello World")
}
MyFunction()