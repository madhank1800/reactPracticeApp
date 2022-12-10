import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import './Signup.css';
const Signup = () => {
    const [regstate, setregState] = useState({});

    function onchange(e) {
        console.log(e.target.value);
        setregState({ ...regstate, [e.target.name] : e.target.value });
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log(regstate);
        console.log("registration from submitted");
    }
    return (
        <>
            <Navbar />
            <form onSubmit={submitHandler} method="post" className="formcss">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={onchange}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
                </div>
                <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            name="firstName"
            onChange={onchange}
            required
          />
         
                </div>
                <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
            name="lastName"
            onChange={onchange}
            required
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={onchange} autoComplete="on"
            required
          />
        </div>
       

        <button type="submit" className="btn btn-primary butcol">
          Submit
        </button>
      </form>
        </>
    );
}
export default Signup;