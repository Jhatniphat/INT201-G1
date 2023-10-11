const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90],
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62],
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95],
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62],
  },
];

function getAttendanceRate(students){
    students.forEach(student => {
        const attCount = student.attendance.filter( (att) => att ==true).length
        console.log(`Attendance Percentage of ${student.name} are ${((attCount)/student.attendance.length)*100}`)
    });
}

function getAvgScore(students){
    students.forEach(student => {
        const sum = student.testScores.reduce( (score1 , score2) => score1 + score2 , 0)
        console.log(`AvgScore of ${student.name} are ${sum/student.testScores.length}`)
    })
}

getAttendanceRate(students)