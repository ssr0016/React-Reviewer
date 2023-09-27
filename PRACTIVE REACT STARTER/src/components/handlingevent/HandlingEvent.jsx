


const HandlingEvent = () => {
    //Objective
    //Create button one you click it the browser will give a notification or alert to the user
    //create an input that all the value of data that user input will be rendered in console log
    // create a form with submit button

    const handleSbumit = (event) => {
        event.preventDefault();
        // console.log(event.target[0].value)
        // console.log(event.target[1].value)
        console.log(event.target.elements.fname.value)
        console.log(event.target.elements.lname.value)
    }

    const buttonAlertNotification = (name) =>{
        alert(`Hello World!, ${name}`);
    }

  return (
    <div>
        <h2>All the input data will be rendered on server side rendering which is console</h2>
        <input type="text" name="fname" onChange={(event) => console.log(event.target.value)} />

        <br />
        <br />
        <h2>This button once you click it will give a notification</h2>
        <button onClick={() => buttonAlertNotification(`Samson`)}>Button</button>
        <br />
        <br />  
        <hr />
        <br />

        <form onSubmit={handleSbumit}>
            <div>
                <input type="text" name="fname" placeholder="Enter first name ..."/>
            </div>
            <div>
                <input type="text" name="lname" placeholder="Enter last name ..."/>
            </div>
            <button type="submit">Submit Form</button>
        </form>
    </div>
  )
}

export default HandlingEvent