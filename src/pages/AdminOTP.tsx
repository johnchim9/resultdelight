
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Verify OTP
    console.log("Verifying OTP:", otp);
    navigate("/admin/dashboard");
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Verify</button>
      </form>
    </div>
  );
};

export default AdminOTP;

