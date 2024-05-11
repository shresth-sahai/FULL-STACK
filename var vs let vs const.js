// var --> functional scoped 

//console.log(x);
//var x=1;
//console.log(x);
// this is known as variable hoisitng ---> 
// functional scoped 

/*
console.log(x);
var x = 1;
console.log(x);
function a() {
    console.log(h);
}
console.log(h);
a();
var h = "inside function";
var z = 1;
var z = 2;
let x = 1;
let x = 2;
*/
/*function test() {
    var x = 31;
    if (1) {
        var x = 71;
        let y = 41;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
}
test();

// var x=31--> entire x=31
// if x=71 const p = 1;
p = 2;
p=p+1
const a = () => {
    
}
function a() {
    
}
const func1 = () => console.log(1)

func1()
func2()

function func2() {
  console.log(2)
}

func3()
var func3 = function func4() {
  console.log(3)
}
const a = 1
console.log(a)

var b
console.log(b)
b = 2

console.log(c)
var c = 3

console.log(d)
let d = 2
let d;
console.log(d);
// IIFE -- > 

const x =(function (x, y) {
  console.log(x + y);//3 
})(1, 2);
(function (x, y) {
  console.log(x + y);//3 
})(1, 2);
let foo = 10
function func1() {
    console.log(foo)                 // ---> undefined
    var foo = 1;
     console.log(foo)   // ---> 1
}
console.log(foo) //---> 10
func1() 

function func2() {
    console.log(foo)
    let foo = 1  //---> err 
}
func2 ()

(() => {
    
})

(() => {
  if (!fn) {
    function fn() {
      console.log('2')
    }
  }
  fn()
})()

function fn() {
  console.log('1')
}

function fn1() {
  console.log('3')
}

(() => {
  if (!fn1) {
    function fn1() {
      console.log('4')
    }
  }
  fn1()
})()
(() => {
  if (false) {
    function fn3() {
      console.log('5')
    }
  }
  fn3()
})()


*/
// arrow functiom
// const ---> block scoped no redeclaration && reassign thing works for it 
// arrow -- > ES6 
// function hoisting also occurs in JS 











