 
 const coding = ["js","css","html","reactjs"]

 // coding.forEach(  function (item) {
 //     console.log(item);
     
 // })
 
 // coding.forEach((item) => {
 //     console.log(item);
     
 // })
 
 // function printMe(item){
 //     console.log(item);    
 // }
 // coding.forEach(printMe)
 
 // coding.forEach((item,index,arr)=>{
 //     console.log(item,index,arr);
 // })
 
 const mycodimg= [
     {
         langname : "javascript",
         langfilename : "js"
     },
     {
         langname : "java",
         langfilename : "java"
     },
     {
         langname : "python",
         langfilename : "py"
     }
 ]
 mycodimg.forEach((item) => {        //arrow function//
 console.log(item.langname);
     
 })