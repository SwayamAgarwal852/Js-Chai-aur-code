let mydate = new Date()

// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof(mydate))

// let createddate = new Date(2022, 0, 14)
// let createddate = new Date(2022, 0, 14, 13, 23)
let createddate = new Date("2023-03-23")

// console.log(createddate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp) // in milliseconds

// console.log(Math.floor(Date.now()/1000)) // ins seconds

console.log(mydate.getDay())

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday:"long"
})

console.log(newDate)