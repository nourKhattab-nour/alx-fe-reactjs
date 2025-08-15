import React from "react";
import PropTypes from "prop-types";
import UserCard from "../UserCard/UserCard";
import Loader from "../Loader/Loader";

const SearchResults = ({ userData, loading, error }) => {
  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;
  if (!userData)
    return <div className="empty-state">Search for a GitHub user</div>;

  return (
    <div className="search-results">
      <UserCard user={userData} />
    </div>
  );
};

SearchResults.propTypes = {
  userData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchResults;
