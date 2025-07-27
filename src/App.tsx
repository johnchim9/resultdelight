import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       <Route element={<Layout />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/results" element={<ResultChecker />} />
</Route>
</Routes>
    </Router>
  );
}

export default App;