import React from "react";

const AdminTOTPSetup = () => {
  const secret = "FAKE-SECRET-KEY"; // To be fetched from backend
  const qrCodeUrl = "https://via.placeholder.com/150"; // Replace with real QR

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Setup 2FA (TOTP)</h2>
      <p className="mb-2">Scan this QR code in your authenticator app:</p>
      <img src={qrCodeUrl} alt="TOTP QR Code" className="mb-4" />
      <p>Secret Key: <code>{secret}</code></p>
    </div>
  );
};

export default AdminTOTPSetup;

