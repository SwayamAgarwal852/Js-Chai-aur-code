let name = "Swayam"
let age = 50

// console.log(name + age + " Hello") // not recommended to concatenate strings

console.log(`Hello my name is ${name} and my age is ${age}`)

const myName = new String("Swayam-Agarwal-com") // another way to declcare string

// console.log(myName[0])
// console.log(myName.length)
// console.log(myName.toUpperCase())

// console.log(myName.charAt(3))
// console.log(myName.indexOf('a'))

// const duplicate = myName.substring(0,5) // ismein negative values nhi de sakte
// console.log(duplicate)

// let another_duplicate = myName.slice(-14,11)
// console.log(another_duplicate)

// let newString = "       Swayam      "
// console.log(newString.trim())

// let url = "https//swayam.com/swayam%20agarwal"
// console.log(url.replace('%20', '-'))
// console.log(url.includes('swayam'))

console.log(myName.split('-',2))