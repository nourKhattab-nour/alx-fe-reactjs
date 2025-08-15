// src/components/UserCard/index.js
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img 
        src={user.avatar_url} 
        alt={user.login} 
        className="user-avatar"
      />
      <div className="user-info">
        <h2>{user.name || user.login}</h2>
        {user.bio && <p className="user-bio">{user.bio}</p>}
        <div className="user-stats">
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
          <span>Repos: {user.public_repos}</span>
        </div>
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="profile-link"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired
  }).isRequired
};

export default UserCard;
