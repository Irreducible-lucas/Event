import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const GenderAge: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <Tabs>
        <div className="flex items-center justify-center">
          <TabList className="flex space-x-2 mb-6 justify-center bg-purple-100 rounded-full p-1 lg:w-[43%]">
            <Tab
              className="px-6 py-2 text-sm font-medium rounded-full transition-all bg-transparent text-purple-600 outline-none"
              selectedClassName="bg-purple-600 text-red-500 shadow"
            >
              Gender
            </Tab>
            <Tab
              className="px-6 py-2 text-sm font-medium rounded-full transition-all bg-transparent text-purple-600 outline-none"
              selectedClassName="bg-purple-600 text-red-500 shadow"
            >
              Age
            </Tab>
          </TabList>
        </div>

        {/* Chart content for "by Gender" */}
        <TabPanel>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40">
              {/* Male (blue) Segment */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    #3b82f6 0% 75%, 
                    #f43f5e 75% 100%)`,
                }}
              ></div>
              {/* Inner circle */}
              <div className="absolute inset-2 bg-white rounded-full"></div>
              <p className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-gray-800">880</span>
                <span className="text-sm text-gray-500">Ticket Sold</span>
              </p>
            </div>
            <div className="flex w-full mt-6">
              <div className="flex-1 text-center">
                <p className="text-lg font-semibold text-blue-500">660</p>
                <p className="text-sm text-gray-500">Male Participant</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-lg font-semibold text-pink-500">220</p>
                <p className="text-sm text-gray-500">Female Participant</p>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Chart content for "by Age" */}
        <TabPanel>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    #22c55e 0% 45%, 
                    #f97316 45% 100%)`,
                }}
              ></div>
              <div className="absolute inset-2 bg-white rounded-full"></div>
              <p className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-gray-800">880</span>
                <span className="text-sm text-gray-500">Ticket Sold</span>
              </p>
            </div>
            <div className="flex w-full mt-6">
              <div className="flex-1 text-center">
                <p className="text-lg font-semibold text-green-500">400</p>
                <p className="text-sm text-gray-500">Youth</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-lg font-semibold text-orange-500">480</p>
                <p className="text-sm text-gray-500">Adults</p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default GenderAge;
