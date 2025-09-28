const getStudentName = (students, studentName) => {
    for (let i = 0; i < students.length; i++) {
        students[i] === studentName && console.log(i, students[i]);
    }
};

const students = ['Trish', 'Yennefer', 'Philippa', 'Tissaia', 'Vildefort'];
getStudentName(students, 'Tissaisa');
