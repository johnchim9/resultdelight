import React, { useState } from "react";

const ViewAuditLogs = () => {
  const [logs] = useState([
    { timestamp: "2025-07-27T10:00Z", action: "Admin logged in" },
    { timestamp: "2025-07-27T10:05Z", action: "Updated student result" },
  ]);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Audit Logs</h2>
      <ul className="space-y-2">
        {logs.map((log, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded">
            <span className="font-mono text-sm text-gray-700">{log.timestamp}</span> — {log.action}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAuditLogs;