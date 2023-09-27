// let x = [];
// console.log(typeof x);

// if (x?.length === 0) console.log("empty array");
// else console.log("not empty array");
// console.log(x?.[0]); //return undefined

// x = [1, 3, 5];
// //x[index]
// x[0] = 1;
// x[1] = 3;
// x[2] = 5;

// //add a new element in the end of array
// x.push(7);
// x.push(9);
// console.log(x);

// const y = [1, true, "beginner", 2.5]; //untypes, mixed type
// console.log(y)
// console.log(y[0]) //1
// console.log(y[y.length - 1]) //2.5
// console.log(y.length) //4

// //nested array
// const z = [
//     [2,4,6],
//     [true],
//     ['a','b','c']
// ]

// console.log(z[0])
// console.log(z[z.length-1])

// //nested with object
// const m = [
//     { productId: 1 , name : 'pen' , price : 200},
//     { productId: 2 , name : 'notebook' , price : 100},
//     { productId: 3 , name : 'pencil' , price : 10}
// ]
// console.log(m.length)
// const n = {productId:[1001 , 1002 , 1003] , productPrice:[100,10,15]}
// console.log(n.productId)
// console.log(n.productPrice)

// // create array with spread oparator
// const x = [5 , 7 , 9]
// const y = [...x , 11 , 13 , ...x]
// console.log(x)
// console.log(y)
// const z = 'today is a good day'
// const m = [...z]
// console.log(m)

// //for ..of use with array 
// for (const ch of m) {
//     console.log(ch)
// }
// for (const value of x) {
//     console.log(value)
// }

// //create array with constuctor
// const x = new Array()
// console.log(x)
// console.log(x.length)

// const y = new Array(5)
// console.log(y) // [<5 empty items>] 
// console.log(y.length) //5
// console.log(y[0]) // undefined

// const z = new Array(10 , 'A')
// console.log(z) // [10 , 'A']
// console.log(z.length)
// console.log(z[0])

// // const x = new Array(5) //กำหนดความยาว
// const x = Array.of(5) // ใส่ค่าลงไป
// const y = Array.of(1 , 5 , 7)
// const z = Array.of(true , 'a' , 'JS')

// console.log(x.length)
// console.log(y.length)
// console.log(z.length)

// //create array with  Array.from()
// const x = [1 , 3 , 5]
// const y = [2 , 4 , 6]
// let z = Array.from(x)
// console.log(z)
// z = [...y]
// console.log(z)
// const a = [...x , ...y]
// console.log(`a = ${a}`)
// console.log(a)

// delete x[1] //ไม่ค่อบนิยมใช้กันเท่าไหร่
// console.log(x)
// console.log(x.length)

// const nums = [1 , 3 , 5 , 7 , 9]
// //destructoring , not skip
// const [a , b  , c] = nums // a = 1 , b = 3 , c = 5
// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`c = ${c}`)

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// //destructoring ไม่มีผลกับ original 
// const [x] = nums
// console.log(x)
// console.log(nums)

// //destructuring with skip by index
// const [, , , y , , ...z] = [5 ,10 ,15 ,20 ,25 ,30 ,35, 40 ,45 ,50]
// console.log(`y = ${y}`)
// console.log(`z = ${z}`)
 
// const [...m] = nums
// console.log(m)

// const n  = nums // เอา memory address จาก nums ไปให้ n
// n[0] = 990
// console.log(nums)
// //all below are destructuring
// const [o] = nums
// const [, p] = nums
// const [...q] = nums
// console.log(n)
// console.log(o)
// console.log(p)
// console.log(q)


// const x = [...'Hello World']
// console.log(x)
// for (const [index,value] of x.entries()) {
//     console.log(value)
//     console.log(index)
//     //x.entries return [index , value]
// }

function doSomeThing(msg){
    return msg
}
console.log(doSomeThing('hello'))
console.log(typeof doSomeThing)