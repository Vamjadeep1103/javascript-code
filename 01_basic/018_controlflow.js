
// <,>,<=,>=,==,!=,===,!== //

//if and if....else statement//

var runs = 100
if(runs<=90){
    console.log("executed")
}
else{
    console.log("not executed")
}

///nested if---else statement///

const score = 100
if(score <= 50) {
    console.log("score less than 50")
}
else if(score >100){
    console.log("score greater then 100")
}
else {
    console.log("score is perfect");
}

//&& check the both condition //

const debitcard=true
const atmcard=true
const bankaccount=false
if(debitcard && bankaccount && 2==2 && 3==3){   // here for && every condition is true
    console.log("user has bank account")
}

if(debitcard || bankaccount || atmcard ||2!=2){     //here for || any one condition satisfied
    console.log("user has account")

}