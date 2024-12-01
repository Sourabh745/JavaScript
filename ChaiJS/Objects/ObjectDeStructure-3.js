const course = {
    courseName : "java",
    price : "999",
    courseInstructor: "Ankush"
}
// without de-structuring accessing entities of object
//course.courseInstructor

//with de-structuring 
const {courseInstructor: instructor, price, courseName} = course;

//console.log(courseInstructor);
console.log(courseName);
console.log(price);
console.log(instructor);
