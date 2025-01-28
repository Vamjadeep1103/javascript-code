// arrays

//const myarr =[0,1,2,3]
//console.log(myarr)

//const myname =["deep",'jay',"amar"]  name will be written [""]  

//const myarr2 =new Array(1,2,3,4)
//console.log(myarr2)

// Arrays method

//myarr.push(6)
//myarr.pop(6)
//myarr.unshift(9)
//myarr.shift()
//console.log(myarr.includes(7))
//console.log(myarr.indexOf(3))
//console.log(myarr)


const newarr = myarr.join()     //join will be convert array to String datatypes

console.log(myarr)
console.log(typeofnewarr)

// slice and splice

//const a = ["b","c","d","e"]
//console.log(a.slice(2,3))


let months=['Jan', 'March', 'April', 'June'] //Starting from index 1 (which is the second element ‘March’).
months.splice(2,'feb'); //Remove 1 element (which is ‘March’).

console.log(months)//add feb in palce of that