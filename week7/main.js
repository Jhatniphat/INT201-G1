const book = {
  isbn: "123456789",
  title: "Introduction to JavaScript",
  author: { firstname: "Adam", lastname: "Lee" },
  publisher: {
    name: "HarperCollins",
    location: {
      name: "Silicon",
      country: "USA",
    },
  },
};

const { title } = book; //equally to const title=book.title
console.log(title);
//store property value to new variable name

const { publisher: publisherName, isbn: isbn_book } = book;
console.log(publisherName);
console.log(isbn_book);

const {
  publisher: {
    location: { country },
  },
} = book;
console.log(country);

console.log(
  "================================================================="
);

function sum(n1, n2) {
  return n1 + n2;
}

//arrow function
const sum1 = (n1, n2) => n1 + n2;
const sum2 = (n1, n2) => {
  return n1 + n2;
};
const sum3 = (n1, n2) => {
  let result = 0;
  result = n1 + n2;
  return result;
};

const echo = (m) => m;
//const echo = function(m){return m}
console.log(echo("INT201"));

const array1 = [1, 2, 3, 4, 5];
array1.forEach((arr) => console.log(arr));

const fruits = ["apple", "mango", "orange", "pineapple"];
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));
let allFruits = "";
fruits.forEach((fruit) => (allFruits += fruit + " "));
console.log(allFruits);

console.log("------------------------");
const students = [
  { id: 1, firstname: "somsak", lastname: "Jaidee" },
  { id: 2, firstname: "somchai", lastname: "Dee" },
  { id: 3, firstname: "somying", lastname: "jai" },
];

const jaiStudents = students.filter((student) =>
  student.lastname.toLowerCase().startsWith("jai")
);
console.log(jaiStudents);

//students who has firstname or lastname include 'de' with case in sensitive
const deStudents = students.filter(
  (student) =>
    student.firstname.toLowerCase().includes("de") ||
    student.lastname.toLowerCase().includes("de")
);
console.log(deStudents);

const ids = students.map((student) => student.id)
console.log(ids)

//return student fullname , fullname format is 'lastname, firstname'
const fullnames = students.map((student) => `${student.lastname}, ${student.firstname}`)
console.log(fullnames)

//return all student ids in the format current year follows with student id , for examples
//{ id : 1 , firstname : 'somsak' , lastname : jaidee} => 20231
const currentYear = new Date(Date.now()).getFullYear()
const newIds = students.map((student) => {
  return currentYear + '' + student.id
}
)
console.log(newIds)

//find first jaistudent
const jaiFirstStudents = students.find((student) =>
  student.lastname.toLowerCase().startsWith('jai')  
)
const jaiFirstStudentsIndex = students.findIndex((student) =>
  student.lastname.toLowerCase().startsWith('jai')  
)
console.log(jaiFirstStudents) //{id : 1 , firstname : 'Somsak' , lastname : 'Jaidee'}
console.log(jaiFirstStudentsIndex)

//return boolean that check all student ids whether have id value more than zero
console.log(students.every((student) => student.id > 0))

//return boolean that check at least one student firstname end with 'sak'
console.log(students.some((student) => student.firstname.toLowerCase().endsWith('sak')))