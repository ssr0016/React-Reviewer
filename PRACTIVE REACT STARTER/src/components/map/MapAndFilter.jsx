

const MapAndFilter = () => {
    //Objective: 
  //Make an table that has label ID, FIRSTNAME, LASTNAME, AGE, STATUS - Young or Old
  //Use this array object and render the value it inside the table using map
  //make an loading rendering if the data is not fetch
  //render only Old person using conditional rendering 

  const persons = [
    {
      id: 0,
      fname: "Samson",
      lname: "Recluta",
      age: 30,
    },
     {
      id: 1,
      fname: "Angela",
      lname: "Navarro",
      age: 23,
    },
     {
      id: 2,
      fname: "Delailah",
      lname: "Navarro",
      age: 50,
    }
  ];

  const filteredOldPerson = persons.filter((person) => {
    return person.age >= 50;
  })

  //loading if the data is not fetch
  if(persons.length === 0) return <h1>...Loading</h1>

  return (
    <div>
        <table>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
            {filteredOldPerson.map(person =>{
              return (
                <tr key={person.id}>
                  <td>{person.id + 1}</td>
                  <td>{person.fname}</td>
                  <td>{person.lname}</td>
                  <td>{person.age}</td>
                  <td>{person.age < 50 ? "Young" : "Old"}</td>
              </tr>)
            })} 
        </table>

    </div>
  )
}

export default MapAndFilter