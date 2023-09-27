// //a , b , c are global scope
// // let a = 1
// const b = 2
// var c = 3 

// //d , e are block scope
// {
//     let d = 4
//     const e = 5
//     var f = 6 //var ไม่รู้จัก block scope เลยเป็น global เสมอ
// }
// //h , i , j  are function scope
// function doIt(){
//     let h = 7
//     const i = 8 
//     var j = 9
//     // console.log(d) is not defined
//     // console.log(e) is not defined
//     console.log(f)
// }

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(f)
// doIt()
// // console.log(d) is not defined
// // console.log(e) is not defined
// console.log(f)

// // console.log(h) is not defined
// // console.log(i) is not defined
// // console.log(j) is not defined


//x is global
let x = 1
{
    // js มีกฏอยู่ว่า ใน scope เดียวกันห้ามมีตัวแปลชื่อซ้ำกัน
    //this x is in block only
    let x = 2
    console.log(x)
}
function doIt2(x){
    //this x is function scope
    console.log(x)
}
console.log(x)
doIt2(100)
console.log(x)

let msg = 'hello'
console.log(msg.charAt(0))
let msgs = [...msg]
console.log(msgs)

let n = '2'
console.log(typeof n)
console.log(typeof Number(n))

//optional chaining ?.
//ถ้าเป็น null หรือ undefined จะไม่อ่านข้างหลังของ ?. ต่อ
let a //undefined
//with array
console.log(a?.[0])

//with object
// let b
let b = {id:1 , fullname: 'somchai'}
//ถ้ามีค่าก็แสดงค่าตามปกติ
//1.use . before property name
console.log(b?.id)
//2.use ['property name'] in []
console.log(b['id'])