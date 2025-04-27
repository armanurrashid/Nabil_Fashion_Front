import React, { useEffect, useState } from "react";

const campaigns = [
  { id: 1, name: "Fashion Night", startInSeconds: 2 * 24 * 60 * 60 },
  { id: 2, name: "Happy Hour", startInSeconds: 5 * 24 * 60 * 60 },
];

const CountdownCard = ({ name, startInSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(startInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const days = Math.floor(secs / (24 * 3600));
    const hours = Math.floor((secs % (24 * 3600)) / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 flex items-center min-w-[300px] px-5 mx-5">
      {/* Left Side */}
      <div className="flex flex-col flex-shrink-0 w-40">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-red-600 text-lg font-semibold mt-1">Campaign starts in</p>
      </div>

      {/* Right Side */}
     <div className=" gap-2 ml-auto">
     <div className="flex">
        {[{ label: "d", value: days }, { label: "h", value: hours },].map((item, index) => (
          <div key={index} className="bg-[#1F2937] m-2 text-white rounded-md w-16 h-14 flex flex-col justify-center items-center">
            <div className="text-md font-bold">{item.value}{item.label}</div>
          </div>
        ))}
      </div>
     <div className="flex">
        {[{ label: "m", value: minutes }, { label: "s", value: seconds }].map((item, index) => (
          <div key={index} className="bg-[#1F2937] m-2 text-white rounded-md w-16 h-14 flex flex-col justify-center items-center">
            <div className="text-md font-bold">{item.value}{item.label}</div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

const UpcomingCampaigns = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-3xl max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 px-4">Upcoming Campaigns</h2>
      <div className="h-96 overflow-y-scroll no-scrollbar pr-2">
        {campaigns.map((campaign) => (
          <CountdownCard
            key={campaign.id}
            name={campaign.name}
            startInSeconds={campaign.startInSeconds}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingCampaigns;

// CSS to hide scrollbar (put inside your global.css or tailwind.css)
// .no-scrollbar::-webkit-scrollbar {
//   display: none;
// }
// .no-scrollbar {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
