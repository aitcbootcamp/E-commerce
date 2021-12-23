import { useState } from "react";
import classes from "./form.module.css";



function Form(){
//states for onsubmit
const [submitedname,setsubmitedname] = useState("")
const [submitedlastname,setsubmitedlastname] = useState("")
const [address,setadress] = useState("")
const [number,setnumber] = useState("")
const [email,setemail] = useState("")



//get input value and console values on submit
const submit  =(e)=>{

    e.preventDefault()

    const obj={
        name:submitedname,
        lastName:submitedlastname,
        address:address,
        phone:number,
        email:email
    }
   
 console.log(obj)
}

const changeName  =(e)=>{

    setsubmitedname(e.target.value)
   
    
}

const changeLastName  =(e)=>{

    setsubmitedlastname(e.target.value)
   
    
}

const changeAddress  =(e)=>{

    setadress(e.target.value)
   
    
}

const changeNumber  =(e)=>{

    setnumber(e.target.value)
   
    
}

const changeEmail  =(e)=>{

    setemail(e.target.value)
   
    
}

return(
        <>
 <form className={classes.flexed}  onSubmit={submit}>
     <label>Name</label>
     <input type="text" className={classes.input}  onChange={changeName} ></input>

<label>Last Name</label>
<input className={classes.input} type="text"  onChange={changeLastName}></input>


<label>Address</label>
<input className={classes.input} type="text" onChange={changeAddress} ></input>


<label>Contact Info</label>
<input className={classes.input} type="number"  onChange={changeNumber}></input>

<label>Email</label>
<input className={classes.input} type="email" onChange={changeEmail}></input>

     <button className={classes.btn} type="submit">Submit</button>
</form>

        </>
    )
}

export default Form;