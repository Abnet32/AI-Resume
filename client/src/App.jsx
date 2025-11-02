import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Dashbaord from "./pages/Dashboard.jsx";
import Preview from "./pages/Preview.jsx";
import ResumeBuilder from "./pages/Resumebuilder.jsx";
import Login from "./pages/Login.jsx";
import { useDispatch } from "react-redux";
import api from "./configs/api.js";
import { setLoading, login } from "./app/features/authSlice.js";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const { data } = await api.get("/api/users/data", {
          headers: { Authorization: token },
        });
        if (data.user) {
          dispatch(login({ token, user: data.user }));
        }
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  });

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Layout />}>
          <Route index element={<Dashbaord />} />
          <Route path="builder/:resumeID" element={<ResumeBuilder />} />
        </Route>
        <Route path="view/:resumeID" element={<Preview />} />
      </Routes>
    </>
  );
};

export default App;
