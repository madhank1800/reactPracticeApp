import React from "react";
//import Dashboard from "../Dashboard/Dashboard";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbarcolor">
        <nav className="navbar navbar-expand navbarcolor1">
          <div className="container-fluid">
            <a className="navbar-brand navbarnames" href="#">
              <img
                src="Assets/fox.png"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              fox
            </a>

            <div
              className="collapse navbar-collapse navbarpadding"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" >
                    Tools
                  </a>
                </li>
                <li className="nav-item">
                  <p
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => navigate("/control")}
                  >
                    Control panel
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link active" onClick={() => navigate("/")}>
                    About
                  </p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <p
                    className="nav-link active"
                    onClick={() => navigate("/signup")}
                  >
                    Signup
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <Dashboard/>  */}
    </>
  );
};
export default Navbar;
