const student = {id:65130500012 , fisrtname : 'Jhatniphat' , lastname : 'Sarakal'}
console.log(typeof student)
console.log(student)
console.log(Object.prototype.isPrototypeOf(student))
console.log(Date.prototype.isPrototypeOf(student))
console.log(Object.keys(student))

console.log('=====================================')
const student2 = Object.create(student)
console.log(student2)
console.log(student2.fisrtname)
console.log(student2.lastname)
console.log(student2)
student2.telephone = '0990870875'
console.log(student2)
console.log(Object.keys(student2))

console.log('=======================================')
const lecturer = {id : 1001 , fisrtname : 'Umaporn' , lastname : 'Sup'}
console.log(Object.prototype.isPrototypeOf(lecturer))

//way to get property value
const someoneId = student.id //object.key
const someoneFirstName = student['fisrtname'] //object["key"]
console.log(someoneId)
console.log(someoneFirstName)

//way to assign property value
student.id = 65130500111
student['fisrtname'] = 'john'
console.log(student.id)
console.log(student['fisrtname'])

//dynamic properties
//add new property
student['email'] = 'somchai@kmutt.ac.th'
student.address = 'Bangna , Bangkok'
console.log(student)
//delete existing property
delete student.address
console.log(student)

//Nested Object
student.advisor = lecturer

//fuction in object
console.log('=========================================')
student.getFullName = function(){
    return `${this.fisrtname} ${this.lastname}`
}
console.log(student.getFullName) //get property value of getfullname
console.log(student.getFullName()) //execute function getFullNmae()

//2.create object with constructor function
console.log('============================================')
function Person(id,fisrtname,lastname){
    this.id = id
    this.fullname = `${fisrtname} ${lastname}`
}

const p1 = new Person(111 , 'Rose' , 'Marry')
const p2 = new Person(222 , 'Adam' , 'Smith')
const p3 = new Person(333 , 'PomPom' , 'Purin')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p1))
console.log(Date.prototype.isPrototypeOf(p1))


console.log('=============================================')
class Student {
    constructor(id , fn , ln){
        this.id = id
        this.fisrtname = fn
        this.lastname = ln
    }
    getFullName(){
        return `${this.fisrtname} ${this.lastname}`
    }
}
//st1 object -> Student prototype -> Object prototype (Ancestor)
const st1 = new Student(111 , 'Wendy' , 'Willson')
const st2 = new Student(222 , 'Rose' , 'Marya')
console.log(st1)
console.log(st2)
console.log(st1.getFullName())
console.log(st2.getFullName())
console.log(Object.prototype.isPrototypeOf(st1)) //true
console.log(Student.prototype.isPrototypeOf(st2)) //true

console.log('-------------------------------------------')
//4. create object by using Object.create()
//undergratSt1 object -> Student prototype -> Object prototype (Ancestor)
const undergratSt1 = Object.create(st1)
console.log(undergratSt1)
console.log(undergratSt1.id)
console.log(undergratSt1.fisrtname)
console.log(undergratSt1.lastname)
undergratSt1.project = 'Web Application'
console.log(undergratSt1)
