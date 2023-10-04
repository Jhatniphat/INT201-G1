// // const names = ['alice' , 'John' , 'Bob' , 'Ann']
// const isStartWithALetter = names.every(name => name.toUpperCase().charAt(0) === 'A')
// // const isStartWithALetter = names.every(name => name.toUpperCase().startsWith('A'))
// const isSomeStartWithALetter = names.some(name => name.toUpperCase().charAt(0) === 'A')
// console.log(isStartWithALetter)
// console.log(isSomeStartWithALetter)


// const nums = [5,2,3,4,7]
// console.log( nums.reduce((sum , num) => sum + num) )
// console.log( nums.reduce((sum , num) => sum + num , 5) ) //5 = ค่าเริ่มต้นของ sum
// console.log( nums.reduce((sum , num) => sum * num , 1) )
// console.log( nums.reduce((sum , num) => sum * num) )
// console.log('----------------------------------------')

// const names = ['Alice' , 'Bob' , 'Ann' , 'Cath']
// console.log( names.reduce((concat , str) => concat + str.charAt(0) , ''))

// const buyProducts = [
// {price : 50 , quantity : 2},
// {price : 299 , quantity: 10},
// {price : 15 , quantity : 5 }]
// console.log( buyProducts.reduce((sumOfPrice , product) => sumOfPrice + (product.price * product.quantity) , 0) )

// console.log('-----------------------------------')
// const nums = [10,3,75,1,30,100]
//1. remove 75 , 1 , 30
//return array of deleted element
//splice (startIndex , the numbers of delete element)
//splice (index เริ่มต้น , จำนวนที่ต้องการลบนับจาก index เริ่มต้น)
// const removed = nums.splice(2,3);
// console.log(`nums = ${nums}`)
// console.log(`removed = ${removed}`)
// console.log('-----------------------------------')
// //2. splice to add new elements 
// const addEles = nums.splice(2 , 0 , 111 , 555 , 888)
// console.log(addEles) // return empty array
// console.log(nums)
// console.log('-----------------------------------')
// //3. splice to replace at index 1 with [200 , 400]
// const replaceEles = nums.splice( 1 , 2 , 200 , 400)
// console.log(replaceEles)
// console.log(nums)

//relace nagative numbers to zero
const nums = [-5 , -6 , 7 , 8 , 9 , -1 , 0 , 77 , 88]
const replacedNumber = nums.map((num) => {
    if(num <= 0) return 0
    return num
    }
) 

console.log(replacedNumber)
console.log('=============================')
//str.include
const msg = 'Today is a present'
console.log(msg.includes('Re')) //false
console.log(msg.includes('re')) //true
console.log(msg.includes('day')) //true
console.log(msg.includes('present')) //true

console.log('---------------------------')
//array.include() จะดูทั้ง element ว่าเหมือนมั้ย
const newMsg = msg.split(' ')
console.log(newMsg.includes('Re')) //false
console.log(newMsg.includes('re')) //false
console.log(newMsg.includes('day')) //false
console.log(newMsg.includes('present')) //true

const numStr =  nums.join('*')
console.log(numStr)


console.log(nums.sort())
//asending sort
nums.sort((num1 , num2) => num1 - num2)
console.log(nums)
//deaseanding
nums.sort((num1 , num2) => num2 - num1)
console.log(nums)

const student = [
    {id : 1 , name : 'John Lee'},
    {id : 2 , name : 'adam Smith'}
]
//sorting by name (ascending , deascending)
//sorting by id (ascending , deascending)