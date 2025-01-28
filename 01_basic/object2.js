// const facebookuser = new Object()
const facebookuser = {}

facebookuser.id="123abc"
facebookuser.name="Deep"
facebookuser.isLoggedIn = false

//console.log(facebookuser)

const regularuser = {
    email: "acv@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Deep",
            lastname:"Vamja"
        }

    }
}
//console.log(regularuser.fullname.userfullname.firstname)


const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}
const obj4 = {5:"e",6:"f"}
//const obj3 = Object.assign(obj1,obj2)   //target =obj1 and assign =obj2 will be assign 
//console.log(obj3)

const obj3 = {...obj1,...obj2,...obj4}  //spread also merge the arrays and object also
console.log(obj3)