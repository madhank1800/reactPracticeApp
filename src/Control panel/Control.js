import React from "react";
import Navbar from "../Navbar/Navbar";
import './Control.css';
export const Control = () => {
    
    return (
        <>
            <Navbar />
            <img src="Assets/computer boy1.jpg" alt="Logo1" width="100%" height="300px" className="imagcss" />
            
            <div className="row rowmargin">
                <div className="card controlcardsidecolor" style={{ width: "15rem" }}>
  <div className="card-body">
    <h5 className="card-title">80%</h5>
    <p className="card-text">code change from legacy latest</p>
    
                        </div></div>
                        <div className="card controlcardmargin" style={{ width: "15rem" ,marginLeft:"118px"}}>
  <div className="card-body">
    <h5 className="card-title">60%</h5>
    <p className="card-text">time saved in migrating to new technologies</p>
  
                    </div></div>
                    <div className="card controlcardcss" style={{ width: "15rem" }}>
  <div className="card-body">
    <h5 className="card-title">100%</h5>
    <p className="card-text">efficiency in productivity</p>
    
                        </div></div>
            </div>
        </>
    );
}