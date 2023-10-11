// function sum(n1 , n2){
//     return n1 + n2
// }
// function operator(n1 , n2 , fn){
//     return fn(n1 , n2)
// }

// console.log(operator(1,2,sum))

// const add = (num1,num2) => num1 + num2 
// const subtract = (num1 , num2) => num1 - num2
// function doSomething1(num1 , num2 , op){
//     return op(num1,num2)
// }
// function doSomething2(op){
//     return op
// }

// const result1 = doSomething1(10, 5, add) //15
// console.log('result1', result1)
// const result2 = doSomething2(add) //add function
// console.log(typeof result2) //function
// console.log('result2', result2)
// const result3 = doSomething2(subtract) //subtract function
// console.log(typeof result3) //function
// console.log('result3', result3)
// const result4 = doSomething2(1) //1
// console.log(typeof result4) //Number
// console.log('result4', result4)
// const result5 = doSomething2('add') //'add'
// console.log(typeof result5) //String
// console.log('result5', result5)

// let str = 'Hello World'
// function doSomething3(){
//     let str = 'Hello js'
//     function doSomething4(){
//         return str
//     }
//     return doSomething4()
// }

// console.log(doSomething3())
// console.log(str)

// let a = 1
// let b = 10
// function doSomething(){
//     let b = 5 
//     let result = a + b
//     console.log(result)
//     function doIt(){
//         let c = 100
//         console.log(c)
//         result += c
//         console.log(result)
//     }
//     return doIt
//     //console.log(c) //cannot access outside function doIt
// }
// const fn = doSomething()
// console.log(typeof fn)
// // doIt() //can't access nested function

// doSomething()
// a = 100
// console.log(a) // 100
// console.log(b) //10
// console.log('----------')
// fn()

function counter(){
    let count = 1;
    function increment(){
        return ++count
    }
    function decrement(){
        return --count
    }
    function getCount(){
        return count
    }
    return {increment , decrement , getCount}
}

const {increment , decrement , getCount} = counter()
console.log(increment())
console.log(getCount())
console.log(decrement())