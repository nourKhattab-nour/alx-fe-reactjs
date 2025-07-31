import React, { createContext } from 'react';

// Create the context with a default value
const UserContext = createContext(null);

// Optional: Create a provider component for easier usage
export const UserProvider = ({ children, value }) => {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Export the context as default
export default UserContext;
