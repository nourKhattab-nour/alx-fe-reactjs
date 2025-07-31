import UserDetails from './UserDetails';

function UserInfo() {
  // No longer needs userData prop - context handles the data flow
  return <UserDetails />;
}

export default UserInfo;
