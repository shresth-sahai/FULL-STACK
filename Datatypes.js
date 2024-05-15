// Data types in JS 
// String, Number , BigInt, Boolean, Undefined,Null, Symbol,Object(object,array,Date)
//console.log(this)
// let w = 7.6;
// let color = "Yellow";
// let x = true;
// const obj = { first: "ABC", second: "XYZ" };//object
// // array object 
// const nums = [1, 2, 3]
//console.log(typeof nums);
//a = new Date();
//console.log(a);
//console.log(typeof a);
// let a = 16 + "V";
// let b = "V" + 16
// let c = 16+4 + "V"  // js evaluates exp from L -> R
//console.log(c);
// let x=1;
// x = 5;
// x = "ABC";
// let d = "ABC";
// let e = 'ABC'

// console.log(d == e); // data
// console.log(d === e);// dta +type
//typeof (3 + 4)
//let x;
//console.log(x)



// console.log(typeof a )
// K_V pair
// const obj = {
//     A: "1",
//     B: "2",
//     concat: function c() {
//         return this.A + this.B;
//     }
// }
// console.log(obj.concat())
// this ---> inside obj will point to current object 
// this console.log(this)--> global object 



// In JavaScript,
//   almost "everything" is an object.
//  All JavaScript values, except primitives, are objects.

//let x = new String();

// rest parameter
let x = abc(2, 3, 3, 4, 4, 4, 44, 4, 4, 4, 4, 4, 4, 4, 4);
function abc(...args) {
    let s = 0;
    
    for (let i of args) {
        s += i;
    }
return s;
}
//console.log(x);


// function mul(a, b) {
//     return a * b;
// }
// window.mul(2, 3);
// mul(2, 3); //***** */ browser
//'' == ""
// console.log(null === undefined) // false 
// console.log(null == undefined)  // true // special case   
// console.log(null == 0) //false  //special case 
// console.log(null < 0) // null -> 0 false
// console.log(null > 0) // false 
// console.log(null <= 0) // true 
// console.log(null >= 0) // true 
// console.log(undefined == 0) //false
// console.log(undefined < 0) // false 
// console.log(undefined > 0)//false
// console.log(undefined <= 0)// false 
// console.log(undefined >= 0) // false 
// undefined --> NAN



// const obj = {
//   a: 1,
//   b: this.a + 1,
//   c: () => this.a + 1,
//   d() {
//     return this.a + 1
//   },
//   e() {
//     return (() => this.a + 1)() // IIFE 
//   }
// }
// console.log(obj.b) //exception->when the definition of object is completed then only we can use this
// console.log(obj.c())// arrow function there is no definition of this 
// console.log(obj.d())// 2
// console.log(obj.e())// 2 


// this --> refers to the object 

//console.log(this)// --> global object 




console.log([0] == '')
console.log([0] == 0)


// ternary operator 
const obj = {
  a: 1,
  b() {
    return this.a
  }
}
console.log(obj.b())
console.log((true ? obj.b : a)())
console.log((true, obj.b)())
console.log((3, obj['b'])())
console.log((obj.b)())
console.log((obj.c = obj.b)())








