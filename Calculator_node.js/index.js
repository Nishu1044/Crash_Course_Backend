
const crypto=require('crypto') 
 
 
function sum(a,b){ 
    console.log(a+b)  
} 
 
 
function Subtract(a,b){ 
    console.log(a-b) 
} 
 
function Multiply(a,b){ 
    console.log(a*b) 
} 
 
function Divide(a,b){ 
console.log(a/b) 
} 
 
function sine(x) { 
    console.log(Math.sin(x)); 
} 
 
function cosine(x) { 
    console.log(Math.cos(x)); 
} 
 
function tangent(x) { 
    console.log(Math.tan(x)); 
} 
     
 
 
 
function RandomNumber(length){ 
    if(!length){ 
        console.log('Provide Length') 
    }else{ 
        const randomNum= crypto.randomBytes(length).toString('hex'); 
        console.log(`Random Number (length ${length} bytes): ${randomNum}`); 
    } 
} 
 
 
 
 
 
 
let oper=process.argv[2] 
 
let val1=process.argv[3] 
let val2=process.argv[4] 
 
 
switch(oper){ 
    case "sum": 
        sum(Number(val1),Number(val2)) 
        break; 
    case "Subtract": 
        Subtract(Number(val1),Number(val2)) 
        break; 
    case "Multiply": 
        Multiply(Number(val1),Number(val2)) 
        break 
    case 'Divide': 
        Divide(Number(val1),Number(val2)) 
        break 
    case "sine": 
        sine(Number(val1)) 
        break 
    case "cosine": 
        cosine(Number(val1)) 
        break 
    case "tangent": 
        tangent(Number(val1)) 
        break 
        case "random": 
            RandomNumber(Number(val1)); 
            break; 
    default: 
        console.log("Something Went Wrong") 
     
}