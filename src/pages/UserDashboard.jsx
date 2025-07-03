import { userData, themes } from "../constants/utils";

export default function UserDashboard() {
  // Update theme globally and persist in localStorage
  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selected-theme", theme);
  };

  return (
    <div className="p-6 space-y-6 font-sans">
      <div className="text-4xl font-bold mb-4">User Dashboard</div>

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
