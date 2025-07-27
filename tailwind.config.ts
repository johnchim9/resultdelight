
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/About/AdminDashboard/AdminLogin/AdminOTP/AdminTOTPSetup/AdminTOTPStatus/Home/Login/ManageResults/ManageStudents/Register/ResultChecker/TeacherDashboard/ViewAuditLogs/Layout.{js,ts,jsx,tsx}", // includes all your components and pages
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // Blue-600
          dark: "#1d4ed8",     // Blue-700
          light: "#3b82f6",    // Blue-500
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;