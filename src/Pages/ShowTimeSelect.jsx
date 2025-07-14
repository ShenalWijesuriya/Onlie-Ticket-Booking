import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const days = [
  '13 TODAY',
  '14 TOMORROW',
  '15 MONDAY',
  '16 TUESDAY',
  '17 WEDNESDAY',
  '18 THURSDAY',
  '19 FRIDAY',
];

const screenTimes = {
  'Screen 1': ['1:05 PM', '4:00 PM', '9:00 PM'],
  'Screen 2': ['3:00 PM'],
  'Screen 3': ['9:05 AM', '10:00 PM'],
  'Screen 4': ['9:05 AM', '11:00 AM', '3:00 PM', '7:00 PM', '10:00 PM', '11:00 PM'],
  'Screen 5': ['9:05 AM', '12:00 PM', '1:00 PM', '3:00 PM'],
};

export default function ShowTimeSelect() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleContinue = () => {
    if (selectedDay && selectedScreen && selectedTime) {
      navigate('/section');
    } else {
      alert('Please select day, screen, and time before continuing.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
            {['1', '2', '3', '4'].map((step, index) => (
              <div
                key={index}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition ${
                  index === 0
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'border border-gray-500 text-gray-300'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Show Timing → Seat Selection → Payment → E-Ticket
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-10 tracking-wide">
          Select Show Time
        </h1>

        {/* Day Selection */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide mb-10 px-4">
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-lg">
            ❮
          </button>
          {days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-lg font-semibold min-w-[120px] transition text-sm ${
                selectedDay === day
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-white text-black hover:bg-pink-100'
              }`}
            >
              {day}
            </button>
          ))}
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-lg">
            ❯
          </button>
        </div>

        {/* Screen and Time Selection */}
        {Object.entries(screenTimes).map(([screen, times]) => (
          <div key={screen} className="mb-8 bg-white/5 rounded-xl p-5 shadow-md">
            <h3
              className="text-lg font-semibold mb-3 cursor-pointer text-white flex items-center gap-2"
              onClick={() => setSelectedScreen(screen)}
            >
              🎬 {screen}
              {selectedScreen === screen && (
                <span className="text-pink-400 text-sm">(Selected)</span>
              )}
            </h3>
            <div className="flex flex-wrap gap-3">
              {times.map((time, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedScreen(screen);
                    setSelectedTime(time);
                  }}
                  className={`px-4 py-2 rounded-md transition duration-200 font-medium text-sm ${
                    selectedTime === time && selectedScreen === screen
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-black hover:bg-pink-100'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Continue Button */}
        <div className="flex justify-end mt-12">
          <button
            onClick={handleContinue}
            className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-lg transition"
          >
            Continue Booking →
          </button>
        </div>
      </div>
    </div>
  );
}
