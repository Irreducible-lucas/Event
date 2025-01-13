import { FiLogOut } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const IntegratedAccount = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold my-5">Integrated account</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between border p-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <img
                src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
                alt="Google Analytics"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium">Google analytics</h3>
              <p className="text-xs text-gray-500">
                Navigate the Google Analytics interface and reports.
              </p>
            </div>
          </div>
          <button className="text-sm font-medium text-green-600 border border-green-600 rounded-lg px-3 py-1">
            Connected
          </button>
        </div>

        <div className="flex items-center justify-between border p-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium">Google</h3>
              <p className="text-xs text-gray-500">
                Use Google for faster login methods in your account.
              </p>
            </div>
          </div>
          <button className="text-sm font-medium text-green-600 border border-green-600 rounded-lg px-3 py-1">
            Connected
          </button>
        </div>
      </div>
      <h2 className="text-lg font-semibold mt-6 mb-4">Account security</h2>
      <div className="flex space-x-4">
        <button className="flex-1 flex items-center justify-center text-sm font-medium text-gray-600 border border-gray-300 rounded-lg px-4 py-2 space-x-2 hover:bg-blue-600 hover:text-white">
          <FiLogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
        <button className="flex-1 flex items-center justify-center text-sm font-medium text-red-600 border border-red-600 rounded-lg px-4 py-2 space-x-2 hover:bg-red-600 hover:text-white">
          <MdDelete className="w-5 h-5" />
          <span>Delete my account</span>
        </button>
      </div>
    </div>
  );
};

export default IntegratedAccount;
