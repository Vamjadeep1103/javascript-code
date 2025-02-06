/*
this is not a variable. It is a keyword. You cannot change the value of this.
*/

//when using "this" alone refers the global object//
//in strict mode,when used alone,this also refers to the global object//

//this keyword in event handlers//
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());


//----Explicit Function Binding-----//
//The call() and apply() methods are predefined JavaScript methods.
//They can both be used to call an object method with another object as argument.

//call() function with arguments and arguments in "{}"//

const per = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
 }
 
  const per1 = {
    firstName: "John",
    lastName: "Doe"
  }
 
  const per2 = {
    firstName: "Mary",
    lastName: "Doe"
  }
 // Display result in the JavaScript console
 console.log(per.fullName.call(per1, "Oslo", "Norway"));
 
 //----apply() method with arguments and accepts in an array//

 // const person = {
 //   fullName: function(city, country) {
 //     return this.firstName + " " + this.lastName + "," + city + "," + country;
 //   }
 // }
 // const person1 = {
 //   firstName: "John",
 //   lastName: "Doe"
 // }
 // const person2 = {
 //   firstName: "Mary",
 //   lastName: "Doe"
 // }  
 // // Display result in the JavaScript console
 // console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));


 //---bind() method---//
 //This example creates 2 objects (person and member).//
 //The member object borrows the fullname method from person://

 const person = {
   firstName: "John",
   lastName: "Doe",
   fullName: function() {
     return this.firstName + " " + this.lastName;
   }
 }
 
 const member = {
   firstName: "Hege",
   lastName: "Nilsen",
 }
 
 // Binding the 'fullName' method of the 'person' object to the 'member' object
 let fullName = person.fullName.bind(member);
 
 // Display the full name in an HTML element with the id 'demo'
 console.log(fullName())  






