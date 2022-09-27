import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Header from "./components/Header"
import StyledMenu from "./components/Menu";
import { useState } from "react";


function App() {
  
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main className="main"/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/user" element={<User/>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
