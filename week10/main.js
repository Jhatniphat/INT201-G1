// function ops(n1 = 0, n2 = false, ...n3){
//     // console.log(arguments)
//     console.log(`argument.length = ${arguments.length}`)
//     // console.log(n1 , n2 , n3)
//     console.log('-------------------------')
//     for(const ar of arguments){
//         console.log(ar)
//     }
//     console.log(arguments[10]) 
//     //argument จะเข้าไปเอาทุก element ใน rest
// }

// // ops(1,2,3)
// function who(name = 'unknown'){ //'unknown' = default parameter จะถูกใช้ตอนที่ไม่ได้ส่งค่ามาหรือส่งค่ามาเป็น undefined
//     return name;
// }
// //ข้อดีคือไม่ต้องคอย if else ให้โค้ดยาว
// ops(1,'Jhatniphat')
// ops()
// ops(1 , undefined , 3 , 10)
// ops(1,2,3,4,5,6,7,8,9,10)

// console.log('====================================================')

// const [a,...b] = ['a' , 'b' , 'c' , 'd']
// console.log(a)
// console.log(b)

// const {id : studentId , ...n} = {id : 1 , title : 'js' , authors : 'Rose marry'}
// console.log(studentId) // 1
// console.log(n) // {title : 'js' , authors : 'Rose marry'}
// //เวลา destructering object ชื่อ property ต้องตรงกัน

// console.log('====================================================')

// function sum(n1 , n2 , n3){
//     return n1 + n2 + n3
// }

// const nums = [10 , 20 , 30]
// console.log(sum(nums))
// console.log(sum(...nums))

// console.log('====================================================')

function arrayAdd1([x1] , [y1]){
    return x1 + y1
}
function arrayAdd2([x1 , y1] , [x2 , y2]){
    return x1 + x2 + y1 + y2
}
const a = [5 , 8]
const b = [2 , 7]
console.log(arrayAdd1(a , b))
console.log(arrayAdd2(a,b))

console.log('====================================================')

const students = {
    id : 64001,
    name : 'Somchai Jaidee'
}

const { id : studentId} = students
let { name : studentName} = students
console.log(studentId)
console.log(studentName)
studentName = 'Rose Marry'
console.log(`studentName = ${studentName}`)
console.log(`student.name = ${students.name}`)

console.log('---------------------------------------------------')
function doSomething({ id : studentId}){ //const { id : studentId } = students
    return studentId
}

console.log(doSomething(students))

