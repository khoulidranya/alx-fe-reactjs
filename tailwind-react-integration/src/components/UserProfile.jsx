import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center sm:p-4 md:p-8 lg:p-12 max-w-xs sm:max-w-sm md:max-w-sm mx-auto bg-gray-50 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover border-2 border-gray-300 hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <h1 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 mb-2 sm:mb-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="text-sm sm:text-base md:text-xl text-gray-600 text-center">
        Hi there! I’m a web developer passionate about crafting responsive and engaging user interfaces. Let’s build something amazing together.
      </p>
    </div>
  );
};

export default UserProfile;
