import { useState } from "react";
import classes from "./form.module.css";

function Form(props) {
  //states for onsubmit
  const [submitedname, setsubmitedname] = useState("");
  const [submitedlastname, setsubmitedlastname] = useState("");
  const [city, setCity] = useState("");
  const [address, setadress] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");

  //get input value and console values on submit
  const submit = (e) => {
    e.preventDefault();

    const obj = {
      name: submitedname,
      lastName: submitedlastname,
      city: city,
      address: address,
      phone: number,
      email: email,
    };
    props.setButtonClick(false);
    console.log(obj);
  };

  const changeName = (e) => {
    setsubmitedname(e.target.value);
  };

  const changeLastName = (e) => {
    setsubmitedlastname(e.target.value);
  };
  const changeCity = (e) => {
    setCity(e.target.value);
  };
  const changeAddress = (e) => {
    setadress(e.target.value);
  };

  const changeNumber = (e) => {
    setnumber(e.target.value);
  };

  const changeEmail = (e) => {
    setemail(e.target.value);
  };

  return (
    <>
      <form className={classes.flexed} onSubmit={submit}>
        <span
          className={classes.close}
          onClick={() => {
            props.setButtonClick(false);
          }}>
          Close
        </span>
        <label>First Name</label>
        <input
          required
          type="text"
          className={classes.input}
          onChange={changeName}></input>

        <label>Last Name</label>
        <input
          className={classes.input}
          type="text"
          required
          onChange={changeLastName}></input>
        <label>City</label>
        <input
          className={classes.input}
          type="text"
          required
          onChange={changeCity}></input>

        <label>Address</label>
        <input
          className={classes.input}
          type="text"
          required
          onChange={changeAddress}></input>

        <label>Phone Number</label>
        <input
          className={classes.input}
          type="text"
          required
          onChange={changeNumber}></input>

        <label>Email</label>
        <input
          className={classes.input}
          type="email"
          required
          onChange={changeEmail}></input>

        <button className={classes.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
