const students = [
    {
        id: 1,
        firstName: "Samson",
        lastName: "Recluta",
        age: 30,
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
        age: 23,
        address: "Bulihan Cavite",
        courses: ["Elementary", "Doctor", "Smart"],
        date: new Date,
        paid: 700,
    },
    ];
    
    students.map((student, index) => {
        console.log(student)
    });

    //mag return ng boolean value ang some() method kung may nakita siya true sa pina mong method

  const someStudents = students.some((student, index) => student.paid < 500);
  console.log(someStudents)