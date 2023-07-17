// developer: Harshad Patil

let userOne = {
    firstName: "Harshad",
    lastName: "Patil",
}

let userTwo = {
    firstName: "Sanjay",
    lastName: "Ganatara",
}

let printFullName = function (homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + " , " + state);
}

// Function borrowing = call Method
printFullName.call(userOne, "Thane", "Maharashtra")
printFullName.call(userTwo, "Mumbai", "Maharashtra")

// Apply Method
printFullName.apply(userOne, ["Thane", "Maharashtraa"])
printFullName.apply(userTwo, ["Mumbaii", "Maharashtra"])

// Bind Method
let printMyNameOne = printFullName.bind(userOne, "Thane", "Maharashtra");
console.log(printMyNameOne)
printMyNameOne();
let printMyNameTwo = printFullName.bind(userTwo, "Mumbaii", "Maharashtra");
console.log(printMyNameTwo)
printMyNameTwo();

