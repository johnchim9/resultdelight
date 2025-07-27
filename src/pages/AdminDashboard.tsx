import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
    <ul className="space-y-2">
      <li><Link to="/admin/manage-students" className="text-blue-600 underline">Manage Students</Link></li>
      <li><Link to="/admin/manage-results" className="text-blue-600 underline">Manage Results</Link></li>
      <li><Link to="/admin/audit-logs" className="text-blue-600 underline">View Audit Logs</Link></li>
      <li><Link to="/admin/totp-status" className="text-blue-600 underline">TOTP Status</Link></li>
    </ul>
  </div>
);

export default AdminDashboard;
