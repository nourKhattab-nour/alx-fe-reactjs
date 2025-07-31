import UserInfo from './UserInfo';

function ProfilePage() {
  // No longer needs userData prop - context handles the data flow
  return <UserInfo />;
}

export default ProfilePage;
