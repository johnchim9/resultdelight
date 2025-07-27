import React from "react";

const AdminTOTPStatus = () => {
  const isEnabled = true; // Would be fetched from backend

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">TOTP Status</h2>
      <p>
        TOTP is currently <strong className={isEnabled ? "text-green-600" : "text-red-600"}>
          {isEnabled ? "ENABLED" : "DISABLED"}
        </strong>.
      </p>
    </div>
  );
};

export default AdminTOTPStatus;

