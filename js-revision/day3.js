// ✅ Operators (Arithmetic, Logical, Comparison)

let a = 3;
let b = 10;

// Arithmetic operator

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// comparision operator

console.log(a > b)
console.log(a < b)
console.log(12 <= 10)
console.log(10 == 10)
console.log(10 === "10")       //false          note:  it will also check data type along with value

// LOGICAL OPERATOR  &&(and operator) || (or operator)  !(not operator)

console.log(50 > 40 && 10 === "10")
console.log(100 < 90 || 60 > 30)         //true                    //or operator: if one condition is true, it will give you true
console.log(true ==  !true)             //true 
console.log(5 == "5")
console.log(5 !== 5)   

// parseInt, parseFloat,number

let num = "10.50"

console.log(parseInt(num))
console.log(parseFloat(num))

let stringToNumber = Number(num)
let newNum = 20
console.log(stringToNumber)
console.log( newNum + stringToNumber  )  