import { chart } from "../../assets";
import WeatherCard from "./WeatherCard";

const RevenueChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <button className="text-sm text-blue-500 bg-blue-100 px-2 py-1 rounded">
            Last 7 days
          </button>
        </div>
        <div className="w-full ">
          <img src={chart} alt="" />
        </div>
      </div>
      {/* WeatherCard */}
      <WeatherCard />
    </div>
  );
};

export default RevenueChart;
