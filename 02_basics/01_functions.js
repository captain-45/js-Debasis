function sayMyNmaee() { 
    console.log("D")
    console.log("e")
    console.log("b")
    console.log("a")
    console.log("s")
    console.log("i")
    console.log("s")
}
//sayMyNmaee() 

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}
addTwoNumbers(1, null)


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Username is required")
        return;
 
   } 
    return `${username} just Logged in`
}
console.log(loginUserMessage());