// //syschronous programing ทำงานบรรทัดบนให้เสร็จก่อนค่อยทำต่อ
// //interpreter translator แปลทั้งโปรแกรมก่อน ค่อยทำ ถ้าเจอข้อผิดพลาดจะสั่งหยุดทันที

// function greeting(someone){
//     return 'hello, ' + someone;
// }
// let myName = 'Jhatniphat Sarakal';
// myName = 10; //weakly and dynamic data type
// console.log(greeting(myName));
// console.log("Starting. . .");
// //asyschronous programing
// setTimeout(
//     ()=>{
//     console.log('more complex task finish...');
// } , 10000)

// console.log("Good bye. . .");

// setTimeout(
//     ()=>{
//     console.log('simple task finish...');
// } , 2000) //งานไหนเสร็จก่อนก็เข้าไปใน stack ก่อน

// let msg = "I'm a student.";
// console.log(msg);

let a = null;
console.log(a);
let total;
console.log(total);
if(total === undefined) console.log('variable does not have initial value');
if(a === null) console.log('variable has null value')
// === (เป็นการเช็คทั้ง data type และ value)
// == (เป็นการเช็ค value)
if('2' == 2) console.log(`'2' == 2 : ${'2'==2}`)
if('2' === 2) console.log(`'2' === 2 : ${'2'===2}`)

//object sample
const obj = { id:1001 , name:'pen' , price : 100 }
const obj2 = { id:2001 }
// obj = obj2 //obj cannot change reference value
obj.id = 999 //but obj can update its properties
console.log(obj.id)

// const con = 1;
// con = 2; //const can't change value

let str = 'hello';
str.toUpperCase(); //สร้าง String ใหม่ แต่ไม่ได้ยุ่งกับค่า str
console.log(str) //hello
console.log(str.toUpperCase()) //HELLO
str = str.toUpperCase(); //ถ้าต้องการเปลี่ยนค่าต้องทำแบบนี้
console.log(str) //HELLO

let std = { firstname:"Jhatniphat" , lastname:"Sarakal"}
std.lastname = 'Deejai'
console.log(std) //return {firstname:"Jhatniphat" , lastname:"Deejai"}