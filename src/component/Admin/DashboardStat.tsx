import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faUsers,
  faTag,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import StatCard from "./StatCard";

const DashboardStat: React.FC = () => {
  return (
    <div className="p-6  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FontAwesomeIcon icon={faBullhorn} className="h-6 w-6" />}
          value="20"
          label="Awesome Events"
          bgColor="bg-purple-500"
        />
        <StatCard
          icon={<FontAwesomeIcon icon={faUsers} className="h-6 w-6" />}
          value="50"
          label="Attendees Opened"
          bgColor="bg-blue-500"
        />
        <StatCard
          icon={<FontAwesomeIcon icon={faTag} className="h-6 w-6" />}
          value="880"
          label="Tickets Sold"
          bgColor="bg-pink-500"
        />
        <StatCard
          icon={<FontAwesomeIcon icon={faDollarSign} className="h-6 w-6" />}
          value="200M"
          label="Total Revenue"
          bgColor="bg-green-500"
        />
      </div>
    </div>
  );
};

export default DashboardStat;
