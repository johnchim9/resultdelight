import { PropsWithChildren } from "react";
import { useNavigate } from "<Outlet />";
import { getToken, logout } from "../utils/auth";

const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const token = getToken();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">School Portal</h1>
        <div className="flex items-center gap-4">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;