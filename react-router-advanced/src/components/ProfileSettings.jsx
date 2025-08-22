import { useState } from "react";

const ProfileSettings = ({ user }) => {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: "light",
    language: "en",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="profile-section">
      <h2>Profile Settings</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            Enable notifications
          </label>
        </div>

        <div className="form-group">
          <label>Theme:</label>
          <select name="theme" value={settings.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div className="form-group">
          <label>Language:</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        <button onClick={handleSave} className="save-btn">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
