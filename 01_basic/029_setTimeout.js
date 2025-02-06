//setTimeout,setInterval,nested setTimeout//

// function sayhi(){
//     console.log("hello")
// }
// setTimeout(sayhi,2000);

//setTimeout(() => console.log('Hello'), 1000)


//setInterval function used for 

// let timerId = setInterval(() => console.log('tick'), 2000);
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


//----best example of setInterval----//
let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000); // Re-sets the timeout to call the function again
}, 2000);
setTimeout(() => {
    clearTimeout(timerId);  // Stops the continuous execution
    console.log('Timer stopped!');
}, 10000);  // Stop after 10 seconds
