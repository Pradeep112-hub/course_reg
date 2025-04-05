function showcourses()
{
    
    fetch("http://localhost:8080/courses")
    .then((response) => response.json())
    .then((data) =>{
        const dataTable=document.getElementById("coursetable")

        data.forEach(course => {
            var row=`<tr>
            <td>${course.courseId}</td>
            <td>${course.courseName}</td>
            <td>${course.trainer}</td>
            <td>${course.durationInWeeks}</td>
            </tr>`
            dataTable.innerHTML+=row;
        });
    });
}
function showcourses1()
{
    
    fetch("http://localhost:8080/courses/enroll")
    .then((response) => response.json())
    .then((data) =>{
        const dataTable=document.getElementById("coursetable1")

        data.forEach(course => {
            var row1=`<tr>
            <td>${course.name}</td>
            <td>${course.emaild}</td>
            <td>${course.courseName}</td>
            </tr>`
            dataTable.innerHTML+=row1;
        });
    });
}