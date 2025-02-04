// //object literals
// const mysym = Symbol("key1")

// const JsUser = {
//     name: "Debasis",
//     age: 20,
//     [mysym]: "mykey1",
//     location: "Odisha", 
//     email: "panda@gmail.com",
//     isLoggedIn: false,
//     lastLoggedin: ["monday", "Saturday"]
// }

// console.log(JsUser.name);

// JsUser.name = "Debasis Panda"
// //Object.freeze(JsUser) //changes aren't visible after we frezess a object
// JsUser.age = 21
// console.log(JsUser)

// JsUser.greeting = function () {
//     console.log("Hello JsUser");
// }

// JsUser.greetingTwo = function () {
//     console.log(`Hello Js uSer, ${this.name}`);
// }
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())

// //break 2

// //singleton

// //const instaUser = new Object()

// const instaUser = {}

// instaUser.name = "Deb"
// instaUser.id = "45ab"
// instaUser.isLoggedIn = false

// console.log(instaUser)


// const regularUser = {
//     email: "Debasis@gmail.com",
//     fullname: {
//         userFullNmae: {
//             firstName: "Debasis",
//             lastName: "Panda"
//         }
//     }
// }

// console.log(regularUser.fullname.userFullNmae.firstName)

// const obj1 = { 1: "a", 2: "b"}
// const obj2 = { 3: "c", 4: "d", 5: "e" }

// //const obj3 = Object.assign(obj1, obj2)
// const obj3 = {...obj1,...obj2} //spread operator

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//de-strusturing

const course = {
    name: "JavaScript",
    duration: 10,
    instructor: "John Doe"
}
const { instructor: ins } = course
//console.log(instructor)
console.log(ins)
// {
//     "name": "JavaScript",
//     "price": "feree"
// }