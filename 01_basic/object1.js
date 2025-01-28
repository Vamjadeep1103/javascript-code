// singleton
//object literals

const mysym = Symbol("key1")
const jsuser = {
    "full name":"Deep",
    [mysym]:"mykey1",
    age:20,
    location: "surat",
    email: "abv@google.com",
    isLoggedIn:false,
    lastLogindays:["monday","Saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser[mysym])

jsuser.email ="qww@gmail.com" //simplify change any object value synatx is that (obj.name="")
Object.freeze(jsuser) //these object will be freeze the value after that value can not be change

jsuser.age = 22
console.log(jsuser)