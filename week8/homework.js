const students = [
    {id : 1 , name : 'John Lee'},
    {id : 2 , name : 'adam Smith'},
    {id : 3 , name : 'rose marry'}
]
//sorting by name (ascending , deascending)
//sorting by id (ascending , deascending)

const sortByIdAsc = students.sort((student1 , student2) => student1.id - student2.id)
const sortByIdDesc = students.sort((student1 , student2) => student2.id - student1.id)

console.log('Sort by Id Asc')
console.log(students.sort((student1 , student2) => student1.id - student2.id))
console.log('Sort by Id Desc')
console.log(students.sort((student1 , student2) => student2.id - student1.id))

console.log('Sort by Names Asc')
console.log(students.sort( (student1 , student2) => student1.name.toLowerCase().localeCompare(student2.name.toLowerCase()) ) )
console.log('Sort by Names Desc')
console.log(students.sort( (student1 , student2) => student2.name.toLowerCase().localeCompare(student1.name.toLowerCase()) ) )