import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Dashbaord from "./pages/Dashboard.jsx";
import Preview from "./pages/Preview.jsx";
import ResumeBuilder from "./pages/Resumebuilder.jsx";
import Login from "./pages/Login.jsx";
const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Layout />}>
          <Route index element={<Dashbaord />} />
          <Route path="builder/:resumeID" element={<ResumeBuilder />} />
        </Route>
        <Route path="view/:resumeID" element={<Preview />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </>
  );
};

export default App;
