import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Dashboard from "../Dashboard/Dashboard";
import { Home } from "../Home/Home";
import Login from "../Loginpage/Login";
import Signup from "../Signup/Signup";
import { Control } from "../Control panel/Control";
export const Allroutes = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/control" element={<Control/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    );
}