let num = 1
console.log(typeof num)
//weakly type and dynamic types
num = true
console.log(typeof num)

if(typeof(num) === 'boolean'){
    console.log('num is a boolean ')
}

let a = 1n //วิธีสร้าง bigint
console.log(typeof a)

let b = 3.2
console.log(typeof b)

let c = `A-${b / 2 + 1}`
console.log(c)
console.log(typeof c)

if('1') console.log('1 is a boolean true')
else console.log('1 is a boolean false')

if(0) console.log('value is zero')
else console.log('value is not zero')

if(2) console.log('value is two')
else console.log('value is not two')

if('') console.log('an empty string')
else console.log('not empty string')

//object type is a mutable
//sample array data type
const nums = [1 ,3 ,5 ,7]
nums[0] = 11
console.log(nums)
console.log(typeof nums)
//sample object data type : collection of properties
const obj = { id: 1, price : 100}
obj.id = 555
console.log(obj)
console.log(typeof obj)

function doSomeThing(activity){
    // === check data type and value , == check only value
    if(activity === null || activity === undefined){return 'no activity'}
    return `${activity} is done`
}
let act1 //undefined
let act2 = null //null
let act3 = 'JS learning' //String
console.log(doSomeThing(act1)) //no activity
console.log(doSomeThing(act2)) //no activity
console.log(doSomeThing(act3)) //JS learning is done
console.log(doSomeThing()) //no activity

const max = 1;
let aa, bb = 0 , cc = null

if (aa) console.log('aa')
else console.log('not aa')