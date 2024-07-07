function getStudentGrade() {
    let marks = prompt("Enter student marks (0 to 100):");


    marks = Number(marks);
    //check if input is valid
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    //print output
    console.log(grade);
}
//call the function
getStudentGrade();