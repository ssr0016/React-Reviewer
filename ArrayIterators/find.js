const students = [
    {
        id: 1,
        firstName: "Samson",
        lastName: "Recluta",
        age: 42,
        address: "Muntinlupa City",
        courses: ["React Js", "Next Js"],
        date: new Date,
        paid: 450,
    },
    {
    
        id: 2,
        firstName: "Angela",
        lastName: "Navarro",
        age: 23,
        address: "Bulihan Cavite",
        courses: ["Pyschology", "Teacher", "Beautiful"],
        date: new Date,
        paid: 350,
    },
    {
    
        id: 3,
        firstName: "Ysrael",
        lastName: "Navarro",
        age: 5,
        address: "Bulihan Cavite",
        courses: ["Elementary", "Doctor", "Smart"],
        date: new Date,
        paid: 700,
    },
    ];
    
    students.map((student, index) => {
        console.log(student)
    });

    const findStudents = students.find((student, index) => student.age < 30);
    console.log(findStudents)