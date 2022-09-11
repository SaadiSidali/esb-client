import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Login from "./routes/Login";
import Profile from "./routes/Profile";
import SignUp from "./routes/SignUp";
import { autoLogin } from "./store/authSlice";
import { useAppDispatch } from "./utils/hooks";

function App() {
  const dispatch = useAppDispatch();
  dispatch(autoLogin());
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
