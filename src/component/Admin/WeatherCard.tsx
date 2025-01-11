import { weather } from "../../assets";

const WeatherCard: React.FC = () => {
  return (
    <div
      className={` text-white rounded-xl shadow-lg p-6 relative w-auto`}
      style={{
        backgroundImage: `url(${weather})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">26°C</h2>
          <p className="text-sm">Cloudy</p>
        </div>
        {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-yellow-200"
          >
            <path d="M6.35 19.6a1 1 0 01-.57-.2A7.9 7.9 0 015 14a7.93 7.93 0 017-7.92V6a1 1 0 112 0v.08A7.93 7.93 0 0119 14a8.06 8.06 0 01-3.6 6.35 1 1 0 01-1.1-1.6A6.07 6.07 0 0017 14a6 6 0 10-12 0 6.07 6.07 0 002.7 5.2 1 1 0 01-.57 1.8z" />
          </svg>
        </div> */}
      </div>
      <div className="absolute bottom-3">
        <p className="text-sm">Friday, August 24, 2018</p>
        <p className="text-sm font-semibold">Yogyakarta, Indonesia</p>
      </div>
    </div>
  );
};

export default WeatherCard;
