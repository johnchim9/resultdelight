import React, { useState } from "react";

const ResultChecker = () => {
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Fetch result from backend
    setResult(`Dummy result for student ID ${studentId}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Check Result</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Enter Student ID" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Check</button>
      </form>
      {result && <div className="mt-4 p-4 bg-gray-200 rounded">{result}</div>}
    </div>
  );
};

export default ResultChecker;

