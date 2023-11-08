//common js
// const {sum , section} = require('./libs/utils')

//es module
// import {sum , section} from './libs/utils.js'
// import s , {section} from './libs/utils.js'
// const {sum , section} = require('./libs/utils')

// console.log(s(1,2))
// console.log(sum(1 , 2))
// console.log(section)

// const rootNode = document //root node
// console.log(rootNode)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeType)
// console.log(rootNode.nodeValue)

console.log(document.documentElement) //root element = html
console.log(document.documentElement.nodeType)
console.log(document.body) //html > body
console.log(document.body.nodeType) // 1
console.log(document.head) //html -> head
console.log(document.head.nodeType) // 1
console.log(document.title) //html -> head -> title
console.log(document.title.nodeType) // undefined

console.log('-------------------')
console.log(document.title === Node.TEXT_NODE)
console.log(document.title.nodeType === Node.TEXT_NODE)
// const headElement = document.head
// console.log(headElement)
// console.log(headElement.childNodes) //list child (all) , NodeList data type
// //white space ที่เป็น enter ก็เอาเป็น textNode type ด้วย
// console.log(headElement.children) //return child element(element node type Only) , Html collection

// const headChildNodes = headElement.childNodes
// headChildNodes.forEach((hc) => {
//     console.log(hc.nadeName)
//     console.log(hc.nodeType)
//     console.log(hc.nodeValue)
// })
// console.log('---------------------------------------------')
// //HtmlCollection is Array-like not array 
// //that need to convert to array before using array method
// const headChildrenNodes = Array.from(headElement.children)
// headChildrenNodes.forEach((hc) => {
//     console.log(hc.nadeName)
//     console.log(hc.nodeType)
//     console.log(hc.nodeValue)
// })
// console.log('---------------------------------------------')
// //First Child
// console.log('First Child')
// console.log(headElement.firstElementChild)
// console.log(headElement.firstChild)
// //Last Child
// console.log('Last Child')
// console.log(headElement.lastElementChild)
// console.log(headElement.lastChild)

// //Parent
// console.log('Parent')
// console.log(headElement.parentElement)
// console.log(headElement.parentNode)

// //sibling
// console.log('Sibling')
// console.log(headElement.previousElementSibling)
// console.log(headElement.previousSibling)

// //next sibling 
// console.log('Next Sibling')
// console.log(headElement.nextElementSibling)
// console.log(headElement.nextSibling)