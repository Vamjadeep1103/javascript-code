//let month = 1       //these datatype is number string also same method //
/* switch(month){
        case 1:
            console.log("jan")
            break;
        //case 2:
            console.log("feb")
            break;
        case 3:
            console.log("march")
            break;
        default:
            console.log("no match")
            break;
*/
//}

//-------------false values---------//

//false,0,-0,BigInt 0n,"",null,undefined,NaN  ///

// ---------truth value------- //

// "0",'false'," ",[],{},function(){}


//const useremail = ""
//if (useremail.length === 0){        //here array is empty//
    //console.log("Array is empty")
//}

//const emptyobj = {}

//if(Object.keys(emptyobj).length === 0){ //here object is empty//
   //console.log("object is empty")
//}

//Nulish Coalescing Operator (??)

//let val1
//val1 = 5 ?? 10
//val1 = null ?? 10 //expeced o/p will be null
//val1 = undefined ?? 15  //expected o/p will be 15 because undefined is not defined data type
val1 = null ?? 10 ?? 20
console.log(val1)