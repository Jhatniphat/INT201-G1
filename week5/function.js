//create function with function declaration
function concat(str1 , str2){
    return str1 + str2
}
//create function with function expression
const toUpper = function(str1){
    return str1.toUpperCase()
}
//create function with named function expression
const reverse = function rev(str){
    return [...str].reverse().join('')
}

//doSomeThing is a higher order function because it accept op function as its parameter
const doSomeThing = function (str1,op){
    return op(str1)
}
const doIt = function (){
    return concat //!== return concat('A','B')
}
const x = doIt() //x เหมือนได้ function concat ไปแล้ว
console.log(typeof x)
console.log(x('1','2'))
console.log(concat('Js' , 'Beginer'))
console.log(toUpper('Hello world'))
console.log(reverse('Hello world'))
console.log(doSomeThing('Helpppp',toUpper))
console.log(doSomeThing('Helpppp',reverse))

console.log();
console.log()