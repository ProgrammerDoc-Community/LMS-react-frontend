import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Routes/Home'
import Login from "./Routes/Login";
import Register from "./Routes/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
