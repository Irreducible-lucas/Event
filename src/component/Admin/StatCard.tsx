import { StatCardProps } from "../../type";

const StatCard = ({ icon, value, label, bgColor }: StatCardProps) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-4">
      <div className={`p-3 rounded-md text-white ${bgColor}`}>{icon}</div>
      <div>
        <p className="text-xl text-black font-bold">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
