const students = [
    {
        id: 1,
        firstName: "Samson",
        lastName: "Recluta",
        age: 30,
        address: "Muntinlupa City",
        courses: ["React Js", "Next Js"],
        date: new Date,
        paid: 700,
    },
    {
    
        id: 2,
        firstName: "Angela",
        lastName: "Navarro",
        age: 23,
        address: "Bulihan Cavite",
        courses: ["Pyschology", "Teacher", "Beautiful"],
        date: new Date,
        paid: 500,
    },
    {
    
        id: 3,
        firstName: "Ysrael",
        lastName: "Navarro",
        age: 5,
        address: "Bulihan Cavite",
        courses: ["Elementary", "Doctor", "Smart"],
        date: new Date,
        paid: 350,
    },
    ];
    
    // students.map((student, index) =>{
    //     console.log(student)
    // });


    // const newStudents = students.filter((student, index) => student.courses);
    // console.log(newStudents)

//    const newStudents=  students.filter((student, index) => student.paid < 400);
//     console.log(newStudents.splice(0,3))

const numbers = [500, 900, 600, 400, 1000, 1200];
const even = numbers.filter((n)=> n % 2 === 0);
console.log(even.slice(1,3))