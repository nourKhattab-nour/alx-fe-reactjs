import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p>Welcome, {user?.name || "User"}!</p>

      <nav className="profile-nav">
        <NavLink
          to="details"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Profile Details
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Settings
        </NavLink>
      </nav>

      <div className="profile-content">
        <Routes>
          <Route path="details" element={<ProfileDetails user={user} />} />
          <Route path="settings" element={<ProfileSettings user={user} />} />
          <Route path="/" element={<Navigate to="details" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
