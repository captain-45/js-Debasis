let score = "bcg45"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
/*
"33" => 33
"33abc" => NaN
true => 1; 
false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/**
 * 1 => true
 * 0 => false
 * "" => false
 * "Debasis" => true
 */

let someNumber = 45

let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)
/**
 * here type converted to string
 */

//*************************operation***********************
 
let value = 6
let negValue = -value
console.log(negValue)

let str1 = "hello "
let str2 = "Debasis"
str3 = str1 + str2
console.log(str3)

console.log("1" + 5)
console.log(1 + "5")
console.log("1" + 2 + 2)
console.log(1 + 2 + "5")

/**
 * In javaScript if String  comes first in opeation case then all next values are treated as String(case 1 and 3) but if number comes first and then after a String value is placed then the fisrt number values are added with each other and then concatinated with the lastly located String value(caase 4).
 */

 

