//filter has uses many times in js //

//filter has used with arrow function //

// const mynum =[1,2,3,4,5,6,7,8,9,10]
// const newNums = mynum.filter ((num) => num>4)
// console.log(newNums);


//within arrow function condition derived in "{}" so the also use "return"keyword///

// const mynum =[1,2,3,4,5,6,7,8,9,10]
// const newNums = mynum.filter ((num) => {
//     return num>4
// })
// console.log(newNums);

let books =[
    {"Title": "The Great Gatsby", "Genre": "Fiction", "Publish": 1925},
{"Title": "1984", "Genre": "Dystopian", "Publish": 1949},
{"Title": "To Kill a Mockingbird", "Genre": "Fiction", "Publish": 1960},
{"Title": "The Catcher in the Rye", "Genre": "Fiction", "Publish": 1951}
]
//let userbooks = books.filter ((bk) => bk.Genre === "Fiction")
let userbooks1 = books.filter((bk) => {return bk.Publish >= 1950})
//console.log(userbooks1);




// ------map() using in javascript------ //

const mynumber = [1,2,3,4,5,6,7,8,9,10]
//const newnumber = mynumber.map((num) =>{return num + 10})
const newnumber  = mynumber.map((num) => num * 10)
                            .map((num) => num+1)
                            .filter((num) => num > 40)
                            .reverse()
 console.log(newnumber);

// -------reduce() function use in js ------//
const myNums  = [1,2,3]
 const myTotal = myNums.reduce(function(accumulator,currentvalue){
    console.log(`accumulator: ${accumulator} and currentvalue :${currentvalue}`)
     return accumulator  + currentvalue
 },0)
 console.log(myTotal);

//------reduce() function with arrow function example----//

const myTotal1 = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal1);


const shoppingcart = [
    {
        itemname: "js",
        price: 1000
    },{
        itemname: "html",
        price: 1234
    },{
        itemname: "js",
        price: 1898
    }
]
const totalpay = shoppingcart.reduce((acc,itemname)=> acc+itemname.price,0)
console.log(totalpay)