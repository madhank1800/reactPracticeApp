import React from "react";
import './Dashboard.css';
const Dashboard = () => {
    
    return (
        <>
     
            <div className="backgroundscreen ">
                <div className="row rowmargin">
                <div className="card cardsidecolor" style={{ width: "15rem" }}>
  <div className="card-body">
    <h5 className="card-title">10</h5>
    <p className="card-text">Assigned users</p>
    
                        </div></div>
                        <div className="card cardmargin" style={{ width: "15rem" }}>
  <div className="card-body">
    <h5 className="card-title">10</h5>
    <p className="card-text">applications visited</p>
  
                        </div>
                        </div>
</div>
               
<div className="row rowmargin2">
                <div className="card cardmargincolor" style={{ width: "15rem" }}>
  <div className="card-body">
    <h5 className="card-title">112</h5>
    <p className="card-text">Projects created</p>
    
                        </div></div>
                        <div className="card cardmargin1" style={{ width: "15rem" }}>
  <div className="card-body">
    <h5 className="card-title">33</h5>
    <p className="card-text">sessions created</p>
  
                        </div>
                        </div>
</div>
          
        </div>
        </>
    );
}

export default Dashboard;