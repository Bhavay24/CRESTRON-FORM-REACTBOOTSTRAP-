import React, { useState } from "react"; //use-state will help like whenever I write any letter , it will get update in the form.
import "./App.css";
import "./components/formInput.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Alert, Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import FormInput from "./components/FormInput";
import CreatableSelect from "react-select/creatable"; //implemented CreatableSelect library for the "Hobbies" section.



const App = () => {
  const hoptions = [
    { value: "Running", label: "Running" },
    { value: "Swimming", label: "Swimming" },
    { value: "Painting", label: "Painting" },
    { value: "Sleeping", label: "Sleeping" },
  ];

  const [values, setValues] = useState({
    //use-state will help like whenever I write any letter , it will get update in the form.
    firstname: "", //creating a new object for values.These values will be empty initially.
    lastname: "",
    birthday: "",
    gender: "",
    city: "",
    hobbies: [],
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);

    // we have created the function to prevent from refreshing as when we click the submit button , the default action which belongs to the event will not occur.Basically to prevent the native behaviour of the browser.
  };

  const onChange = (e) => {
    //to change the values , having previous values, they are gonna update using target name and value will be updated immediately.
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const test = (e) => {
    const hobbiestemp = [];
    e.map((singleItem) => {
      //used to push the hobbies items to array.
      hobbiestemp.push(singleItem.value);
      // console.log(singleItem.value)
    });
    console.log(hobbiestemp);
    setValues({ ...values, hobbies: hobbiestemp });
  };

  const bandKaro = () => {
    setShowModal(false);
    setValues({
      firstname: "",
      lastname: "",
      birthday: "",
      gender: "",
      city: "",
      hobbies: [],
    });
  };

  return (
    <div>
     <Container>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">CRESTRON ELECTRONICS</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  

    <div className="App">
      <div className="pseudobackground"></div>
      <form className="formStyle" onSubmit={handleSubmit}>
        <div className="inputscontainer">
          <div className="formInput">
            <FormInput
              id="FN"
              name="firstname"
              type="text"
              placeholder="First Name"
              errorMessage="First name should be alphabets and can't contain any special character!"
              label="First Name"
              pattern="^[A-Za-z]+$"
              required="true"
              value={values["firstname"]}
              onChange={(e) => onChange(e)}
            />

            <FormInput
              id="LN"
              name="lastname"
              type="text"
              placeholder="Last Name"
              errorMessage="Second name should be alphabets and can't contain any special character!"
              label="Last Name"
              pattern="^[A-Za-z]+$"
              required="true"
              value={values["lastname"]}
              onChange={(e) => onChange(e)}
            />
            <FormInput
              id="DOB"
              name="birthday"
              type="date"
              placeholder="Birthday"
              errorMessage=""
              label="Birthday"
              value={values["birthday"]}
              onChange={(e) => onChange(e)}
            />
            <label>Hobbies</label>
            <CreatableSelect //CreatableSelect library imported from react-select.The Creatable component enables users to create new options along with choosing existing options.
              onChange={(e) => {
                test(e);
              }}
              className="hobbiesselect"
              isMulti //this library is multi-select and we can choose multi-hobbies(more than one).
              isClearable
              options={hoptions} //pre-defined options
            />
            <FormInput
              id="CITY"
              name="city"
              type="text"
              placeholder="City"
              errorMessage=""
              label="City"
              value={values["city"]}
              onChange={(e) => onChange(e)}
            />
            <label>Gender</label>
            <select
              name="gender"
              onChange={(e) => {
                onChange(e);
              }}
            >
              <option default selected value="" disabled>
                Please Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {setValues}
            <br />

            <Button type="submit">Submit</Button>
            <Modal show={showModal}>
              <Modal.Header>REGISTERED</Modal.Header>
              <Modal.Body>
              <p>Name is {values.firstname}   {values.lastname}</p>
              <p>{values.birthday}</p>
              <p>{values.hobbies}</p>
              <p>{values.city}</p>
              <p>{values.gender}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={(e) => bandKaro()}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default App;
