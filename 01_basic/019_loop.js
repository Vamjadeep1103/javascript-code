//for

/*for(let index=0; index<10; index++){
    const element = index
    console.log(element);

}
*/

function search(arr, value) {
    for (var i = 0; i < arr.length; i++) {
       if (arr[i] === value) {
          return i;
       }
    }
    return -1;
 }
 
 var nums = [1, 2, 3];
 console.log(search(nums, 1));
 console.log(search(nums, 3));
 console.log(search(nums, 30));