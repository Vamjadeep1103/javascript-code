//+++++++ num method ++++++//



let score = 100

let balance = new Number(500)
//console.log(balance.toString().length);
//console.log(balance.toExponential().length);
//console.log(balance.toFixed().length);
//console.log(balance.toPrecision().length);


const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) 


//+++++++ maths method ++++++//

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(-4))
console.log(Math.ceil(4.1))     //4.1 ceil means 5
console.log(Math.floor(4.9))    //4.9 floor means 4
console.log(Math.max(14,9))
console.log(Math.min(-4,9))
console.log(Math.random()) //random value btw in 0 and 1 always.
console.log(Math.floor(Math.random()*10) + 1); 



const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)
