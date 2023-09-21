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
    

    const totalCost = students.reduce((accumulator, student) => {
        accumulator = accumulator + student.paid;
        return accumulator;
    },
    0
    
    );

    console.log(totalCost)