// function in string//

const user ={
    username : "deep"
    ,prices : 188
}

function Object(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

console.log(user)



//arrays in function//
const Array =[10,20,30,40,50]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(Array)) ///if given many arrays you have write whole arrays 