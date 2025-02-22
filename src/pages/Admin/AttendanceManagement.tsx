import { search, sort } from "@/src/assets";
import { AddAttendees, AttendeesTable } from "../../component/Admin";

const AttendanceManagement = () => {
  return (
    <div className="bg-black text-white grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="px-5 py-3 sticky top-0 z-10 bg-black">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold mb-6">Attendances Management</h1>
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Notification Button */}
            <button className="relative" aria-label="Notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile Section */}
            <div className="text-sm">
              <p className="font-bold leading-none hidden lg:block">
                Bhagya Deshani
              </p>
              <p className="text-gray-400 text-xs leading-none hidden lg:block mt-1">
                bhagya.jay46@gmail.com
              </p>
            </div>

            {/* Profile Button */}
            <button aria-label="Profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14c3.866 0 7-3.134 7-7S15.866 0 12 0 5 3.134 5 7s3.134 7 7 7zm0 2c-5.523 0-10 4.477-10 10h20c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search and Sort Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mt-10">
          <div className="w-full px-4 py-2 rounded-lg bg-gray-800 flex justify-between items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white focus:outline-none"
              aria-label="Search events"
            />
            <img src={search} className="w-5 h-5" alt="Search" />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5 lg:mt-0">
            <AddAttendees />
            <button className="flex items-center gap-2 py-3 px-7 border-[1px] rounded-xl border-[#D8DDE4]">
              <img src={sort} className="w-6 h-6" alt="Sort" />
              <p className="text-sm font-semibold text-[#849299]">
                Sort By: descending
              </p>
            </button>
          </div>
        </div>
      </div>
      <AttendeesTable />
    </div>
  );
};

export default AttendanceManagement;
