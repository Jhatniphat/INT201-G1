let circle = {
    radius : 2 ,
    // area : function(){
    //     return Math.pow(Math.PI , 2)
    // }
    //remove : function
    area(){
        return Math.PI * Math.pow(this.radius , 2)
    },
    equals(compareCircle){
        return this.radius === compareCircle.radius
    }
}

console.log(circle)
console.log(circle.radius)
console.log(circle.area())

console.log(circle.equals( { radius : 2 } ))
console.log(circle.equals( { radius : 3 } ))

console.log('====================================')
const emptyObj = {}
console.log(JSON.stringify(emptyObj))
if (JSON?.stringify(emptyObj) === '{}') console.log('1. emptyObj is empty object')
if (Object?.keys(emptyObj).length === 0) console.log('2. emptyObj is empty object')
console.log('------------------------------------')
circle = {}
console.log(JSON.stringify(circle))
if (JSON?.stringify(circle) === '{}') console.log('1. emptyObj is empty object')
if (Object?.keys(circle).length === 0) console.log('2. emptyObj is empty object')