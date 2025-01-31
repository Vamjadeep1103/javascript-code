// for..of loops prinnt the number after number ///

// const array =[30,20,10]

// for(const num of array){

//     console.log(num)
// }

//---------Maps-------//

const myMap = new Map()

myMap.set("In","india")                 //syntax of map will be "map.set(key,value)" //
myMap.set("SA","south africa")
myMap.set("fr","france")
//console.log(myMap)

//for of loop in map//

for(const [key,value] of myMap){
   // console.log(key,"=",value)
}



const myobject = {
    game1: 'NFS',                       //these type syntax will be not allowed in loops//
    game2: 'Spiderman'
}
for(const [key,value] of myobject){
    console.log(key,"=",value)

}

