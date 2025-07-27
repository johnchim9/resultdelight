import React, { useState } from "react";

const ManageStudents = () => {
  const [students] = useState([
    { id: "001", name: "Jane Doe", email: "jane@example.com" },
    { id: "002", name: "John Smith", email: "john@example.com" },
  ]);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Manage Students</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="p-2 border">{s.id}</td>
              <td className="p-2 border">{s.name}</td>
              <td className="p-2 border">{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudents;

