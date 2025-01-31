//for

/*for(let index=0; index<10; index++){
    const element = index
    console.log(element);

}
*/

// function search(arr, value) {
//     for (var i = 0; i < arr.length; i++) {
//        if (arr[i] === value) {
//           return i;
//        }
//     }
//     return -1;
//  }
 
//  var nums = [1, 2, 3];
//  console.log(search(nums, 1));
//  console.log(search(nums, 3));
//  console.log(search(nums, 30));

 //break and continue statement in loops//

//  for(let index=1;index<=20;index++){
//    if(index == 5){
//       console.log(`detected 5`)
//       break
//    }
//    console.log(`value of i is ${index}`);

//  }

for(let index=1;index<=20;index++){
   if(index == 5){
      console.log(`detected 5`)
      continue
   }
   console.log(`value of i is ${index}`);

 }