import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-white shadow-lg rounded-lg">
      {/* Profile Image */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
        John Doe
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        A passionate web developer who enjoys building responsive and user-friendly web applications.
      </p>
    </div>
  );
};

export default UserProfile;
