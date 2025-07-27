import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Welcome to the School Portal</h1>
    <p className="mb-4">Access student results, register accounts, or login as an admin or teacher.</p>
    <div className="flex gap-4">
      <Link to="/register" className="text-blue-500 underline">Register</Link>
      <Link to="/login" className="text-blue-500 underline">Student Login</Link>
      <Link to="/admin/login" className="text-blue-500 underline">Admin Login</Link>
    </div>
  </div>
);

export default Home;

