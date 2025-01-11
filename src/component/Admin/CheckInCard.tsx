import { cards } from "@/src/constant";
import { CheckInProps } from "@/src/type";
import CheckinTable from "./CheckinTable";

const Card = ({ title, value, percentage, percentageType }: CheckInProps) => {
  return (
    <div className="rounded-lg shadow-lg bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 p-5 flex flex-col gap-3 text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{value}</h2>

        <span
          className={`text-sm font-semibold ${
            percentageType === "positive" ? "text-green-400" : "text-red-400"
          }`}
        >
          {percentage}
        </span>
      </div>
    </div>
  );
};

const CheckInCards = () => {
  return (
    <div className="px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <CheckinTable />
    </div>
  );
};

export default CheckInCards;
