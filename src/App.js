import React from "react";
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import '../src/App.css';
import FlightSearch from "./pages/FlightSearch";
import ReviewDetails from "./pages/ReviewDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/User/Dashboard";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flights/search" element={<FlightSearch />} />
        <Route path="flights/review-details" element={<ReviewDetails />} />
        <Route path="/login" element={<Login/>} />
        <Route path="user/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
