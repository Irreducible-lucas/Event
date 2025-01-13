import { profilePic } from "@/src/assets";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import IntegratedAccount from "./IntegratedAccount";

const ProfilePage = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div className="p-8 text-black">
      <div className="mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Profile Picture Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-black text-sm">Profile picture</p>
              <button className="text-gray-700 hover:underline text-xs">
                PNG, JPEG under 5MB
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 lg:mt-0 ">
            <button className="border-2 text-gray-600 rounded-md px-3 py-2 border-gray-600 ">
              Upload new picture
            </button>
            <button className="text-red-500 border-2 border-red-500 px-3 py-2 rounded-md hover:underline text-sm">
              Delete
            </button>
          </div>
        </div>

        {/* Full Name Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Bryan"
              className=" border-[1px] w-full rounded-md px-3 py-1 mt-1 shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Cranston"
              className=" border-[1px] w-full rounded-md px-3 py-1 mt-1 shadow-sm"
            />
          </div>
        </div>

        {/* Contact Email Section */}
        <div className="my-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Contact email
          </label>
          <div className="mt-1 grid lg:grid-cols-3 gap-4">
            {/* Input takes 2 columns */}
            <div className="col-span-2">
              <input
                type="email"
                id="email"
                placeholder="bryan.cranston@mail.com"
                className=" border-[1px] w-full rounded-md px-3 py-1 mt-1 shadow-sm"
              />
            </div>
            {/* Button takes 1 column */}
            <div className="col-span-1">
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md text-sm hover:bg-green-600">
                Add another email
              </button>
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Current Password */}
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Current password
            </label>
            <div className="mt-1 relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                placeholder="********"
                className=" border-[1px] w-full rounded-md px-3 py-1 mt-1 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New password
            </label>
            <div className="mt-1 relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                placeholder="********"
                className=" border-[1px] w-full rounded-md px-3 py-1 mt-1 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>
        <IntegratedAccount />
      </div>
    </div>
  );
};

export default ProfilePage;
