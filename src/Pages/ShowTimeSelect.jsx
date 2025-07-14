// ShowTimeSelect.jsx
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
    <div className="bg-black min-h-screen text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 rounded-full bg-pink-600 text-center leading-8 text-sm font-bold">1</div>
            <div className="w-8 h-8 rounded-full border border-gray-400 text-center leading-8 text-sm">2</div>
            <div className="w-8 h-8 rounded-full border border-gray-400 text-center leading-8 text-sm">3</div>
            <div className="w-8 h-8 rounded-full border border-gray-400 text-center leading-8 text-sm">4</div>
          </div>
          <div className="text-gray-300 text-sm">Show timing selection → Seat Selection → Payment → E-Ticket</div>
        </div>

        <h2 className="text-3xl font-bold text-pink-500 text-center mb-8">Show time Selection</h2>

        <div className="flex items-center justify-center gap-3 overflow-x-auto mb-8">
          <button className="w-8 h-8 bg-gray-700 rounded-full">❮</button>
          {days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                idx === 0 ? 'text-white' : 'text-black'
              } ${selectedDay === day ? 'bg-pink-600 text-white' : 'bg-white'}`}
            >
              {day}
            </button>
          ))}
          <button className="w-8 h-8 bg-gray-700 rounded-full">❯</button>
        </div>

        {Object.entries(screenTimes).map(([screen, times]) => (
          <div key={screen} className="mb-6">
            <h3 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => setSelectedScreen(screen)}>
              {screen} {selectedScreen === screen && <span className="text-pink-400">(Selected)</span>}
            </h3>
            <div className="flex flex-wrap gap-3">
              {times.map((time, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedScreen(screen);
                    setSelectedTime(time);
                  }}
                  className={`px-4 py-2 rounded-md transition ${
                    selectedTime === time && selectedScreen === screen ? 'bg-pink-600 text-white' : 'bg-white text-black'
                  } hover:bg-pink-600 hover:text-white`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-10">
          <button
            onClick={handleContinue}
            className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-pink-700 transition"
          >
            Continue Booking
          </button>
        </div>
      </div>
    </div>
  );
}
