const course = {
    name : "Javascript",
    time_hrs : 14,
    price : 299,
    courseInstructor : "Hitesh Choudhary",
    courseStudent : "Surjo Sekhar Sen"
}

console.log(course.courseInstructor); 
console.log(course.courseStudent);
//This becomes time taking if we need to always use
//this dot notation while accessing the value!!
//WE CAN USE DE-STRUCTING OF THE OBJECT PROPERTY TO ACCESS IT  EFFECTIVELY AND EASILY!!
const {courseInstructor} = course;
// console.log(courseInstructor);

//OR WE CAN MAKE IT A SMALLER NAME TOO!!
const {courseStudent : stud} = course;
console.log(stud);