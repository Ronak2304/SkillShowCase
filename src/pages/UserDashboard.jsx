import DragBall from "../components/DragBall";
import { userData, themes } from "../constants/utils";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  // Update theme globally and persist in localStorage
  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selected-theme", theme);
  };

  return (
    <div className="p-6 space-y-6 font-sans">
      {/* DragBall rendered with pointer-events-none so it doesn't block interactions */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
        <DragBall />
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-4xl font-bold">User Dashboard</div>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm btn-outline btn-primary"
        >
          Go Back
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 bg-base-100 shadow-lg rounded-xl p-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="public/snorlax.jpg"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover border-4 border-primary"
          />
        </div>

        {/* Details Block */}
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold">{userData.name}</p>
          <p className="text-sm text-gray-500">{userData.email}</p>
          <p className="text-sm">Role: {userData.role}</p>
          <p className="text-sm">Joined: {userData.joined}</p>
        </div>
      </div>

      {/* Theme Palette */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Select Theme</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {themes.map((theme) => (
            <div
              key={theme}
              className="cursor-pointer text-center"
              onClick={() => handleThemeChange(theme)}
            >
              <div
                className="w-16 h-16 rounded-full border-2 border-gray-300 mx-auto"
                data-theme={theme}
              >
                <div className="w-full h-full bg-base-200 rounded-full"></div>
              </div>
              <div className="mt-2 text-sm">{theme}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}