import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
