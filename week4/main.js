// let x = 1
// let y = x=== 1 ? 1:0
// console.log(x === 1 ? 1 : 0)//นิพจน์สามารถให้ได้แค่ค่าๆหนึ่ง ไม่สามารถใส่ function ลงไปได้
// // x === 1 ? console.log(1) : console.log(0) //แบบนี้ไม่ได้เด้อ 

// let m = null
// console.log(m?.charAt(0))
// console.log(m?.[0])
// console.log(m?.id)


// //nullish 
// let n = m ?? 0 //equals to m !== null || m !== undefined ? m : 0
// console.log(n)

// function nullish(msg){
//     console.log("hello , " + (msg ?? "guest"))
//     return 0;
// }
// nullish("Jhatniphat")
// nullish()

// let y = [] //array initiazation with empty array
// let z = {} //array initiazation with no property
// console.log(y) //empty array (not null and not undefined)
// console.log(z) //empty object (not null and not undefined)
// console.log(typeof y)
// console.log(typeof z)

// let a = [1 , 3 , 5 ,7]
// a = a ?? y
// console.log(a)

// Math.random() // 0 to 0.999999999999
// let ranDom = Math.round(Math.random() * 10)
// console.log(ranDom)

// function randomInt(min , max){
//     const rand = Math.floor(Math.random * (max - min + 1) + min)
// }

// let str1 = 'ant'
// let str2 = 'Ant'
// let str3 = 'ANT'
// let str4 = 'ant'
// console.log(str1 === str2) //false
// console.log(str1 === str3) //false
// console.log(str2 === str3) //false
// console.log(str1 === str4) //true
// console.log(str1 < str2) //false
// console.log(str3 < str1) //true
// //เอา binary ไปเปรียบเทียบ
// console.log("---------------------")
// //.includes มีส่วนใดส่วนนึงที่เหมือน
// console.log(str1.includes('nt')) //true
// console.log(str1.includes('Nt')) //false
// console.log(str1.toLocaleLowerCase().includes('Nt'.toLocaleLowerCase())) //true
// console.log(str1.toLocaleUpperCase().includes('Nt'.toLocaleUpperCase())) //true
// console.log(str1.includes('ant')) //true

//array compare
let x = [1 , 3 , true , 'unknown']
let y = [1 , 3 , true , 'unknown']
let z = x //give memory address from x to z
console.log(x === y) //false memory address of x === memory address of y
console.log(x === z) //true memory address of x === memory address of z

z[0]='A'
x[0]='B'
y[0]='A'

console.log(x) // ['B' , 3 , true , 'unknown']
console.log(y) // ['A' , 3 , true , 'unknown']
console.log(z) // ['B' , 3 , true , 'unknown']


//object
let m = {id : 1 , title : 'pen'}
let n = {id : 1 , title : 'pen'}
let o = m //give memory address from m to o
console.log(m === n) //false memory address of m === memory address of z
console.log(m === o) //true memory address of m === memory address of o
o.id = 888
console.log(m)
console.log(o)

//primity type compare
let a = 5
let b = 5 
let c = a //give data 5 from a to c 
console.log(a === b) //true 5 ===5
console.log(a === c) //true 5 ===5