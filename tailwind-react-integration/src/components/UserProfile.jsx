import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center sm:p-4 md:p-6 lg:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-gray-50 shadow-md rounded-lg">
      {/* Profile Image */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-cover border-2 border-gray-300"
        />
      </div>

      {/* User Name */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
        John Doe
      </h1>

      {/* User Bio */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        Hi there! I’m a web developer passionate about crafting responsive and engaging user interfaces. Let’s build something amazing together.
      </p>
    </div>
  );
};

export default UserProfile;
