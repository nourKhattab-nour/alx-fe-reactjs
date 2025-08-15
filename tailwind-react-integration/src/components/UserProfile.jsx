function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 max-w-xs mx-auto my-10
                    sm:p-4 sm:max-w-xs
                    md:p-8 md:max-w-sm md:my-20 rounded-lg shadow-lg
                    hover:shadow-xl transition-shadow duration-300">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 mx-auto
                 sm:w-24 sm:h-24
                 md:w-36 md:h-36
                 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg text-blue-800 my-3
                    sm:text-lg sm:my-3
                    md:text-xl md:my-4
                    hover:text-blue-500 transition-colors duration-300">
        John Doe
      </h1>
      <p className="text-sm text-gray-600
                    sm:text-sm
                    md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
