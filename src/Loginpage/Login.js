import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
//import  Button  from 'react-bootstrap/Button';

//import Form from 'react-bootstrap/Form';
//import Modal from 'react-bootstrap/Modal';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Login = () => {
  // const nav = useNavigate();
  const [statevalue, setStatevalue] = useState({});
  const [open, setOpen] = React.useState(false);
  const [forgetopen, setForgetopen] = useState({});

  const forgetchange = (event) => {
    console.log(event.target.value);
    setForgetopen({...forgetopen,[event.target.name]:event.target.value})
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("state:" + forgetopen);
  };

  const forgetsubmit = () => {
    console.log("forget state:",forgetopen)
    setOpen(false);
  }
 // const [modalshow, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  const database = [
    {
      username: "subbu@gmail.com",
      password: "subbu@",
    },
    {
      username: "madhan@gmail.com",
      password: "madhan@",
    },
  ];
  function onchange(event) {
    console.log(".", event.target.value);
    setStatevalue({ ...statevalue, [event.target.name]: event.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();

    //console.log("madhan5:");
    console.log("state:", statevalue);

    // var { emailadd, passwordvalue } = document.forms[0];

    // Find user login info

    if (statevalue.email === database[0].username) {
      console.log("inside");
      // nav("/Navbar");
    }
  }

  const style = {
    marginTop: 36+ 'em',
    marginLeft: 43 + 'em',
    
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary butcol">
          Login
        </button>
      </form>
  
      <Button variant="outlined"  sx={style}  onClick={handleClickOpen}> 
      forgot password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change password</DialogTitle>
        <DialogContent>
          <DialogContentText>
        In order to protect your password make sure that your password contains the following:
          </DialogContentText>
          <DialogContentText>
        It is longer than 7 characters
          </DialogContentText>
          <DialogContentText>
        does not match significantly match your username
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name="email address"
            onChange={forgetchange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New password"
            type="password"
            fullWidth
            variant="standard"
            name="new passoword"
            onChange={forgetchange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Re-enter new password"
            type="password"
            fullWidth
            variant="standard"
            name="re-enter password"
            onChange={forgetchange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={forgetsubmit}>Change password</Button>
        </DialogActions>
      </Dialog>
    {/* <Button  className="buttoncss" onClick={()=>setShow(true)}>
        forget password
      </Button>  
      <Modal show={modalshow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  */}
    </>
  );
};
export default Login;
