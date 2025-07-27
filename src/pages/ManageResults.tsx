import React, { useState } from "react";

const ManageResults = () => {
  const [results] = useState([
    { studentId: "001", subject: "Math", score: 85 },
    { studentId: "002", subject: "Science", score: 92 },
  ]);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Manage Results</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Student ID</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr key={index}>
              <td className="p-2 border">{r.studentId}</td>
              <td className="p-2 border">{r.subject}</td>
              <td className="p-2 border">{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageResults;

