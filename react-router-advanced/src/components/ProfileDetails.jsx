const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-section">
      <h2>Profile Details</h2>
      <div className="profile-info">
        <p>
          <strong>Name:</strong> {user?.name || "Not provided"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email || "Not provided"}
        </p>
        <p>
          <strong>Member since:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
