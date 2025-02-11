// const requestUrl = 'https://github.com/Vamjadeep1103/javascript-code'
// const xhr =new XMLHttpRequest();
// xhr.open('GET',requestUrl)
// xhr.onreadystatechange = function(){
// console.log(xhr.readyState);
// }
// xhr.send()


const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const requestUrl = 'https://raw.githubusercontent.com/Vamjadeep1103/javascript-code/main/your-file.js';

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();


