import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ROWS = 10;
const COLS = 10;
const PRICE = 850;

const soldSeats = [
  '1-2', '4-4', '4-5', '4-6',
  '6-6', '7-6', '8-5', '8-6', '8-7', '8-8'
];

const SECTION_MAP = {
  ODC: [1, 2, 3, 4],
  Balcony: [5, 6, 7],
  Box: [8, 9, 10]
};

export default function Section() {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const key = `${row}-${col}`;
    if (soldSeats.includes(key)) return;
    setSelectedSeats(prev =>
      prev.includes(key) ? prev.filter(seat => seat !== key) : [...prev, key]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert('⚠️ Please select at least one seat before proceeding.');
      return;
    }
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    navigate('/payment');
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen py-10 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Stepper */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((step, idx) => (
              <div
                key={idx}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition ${
                  step <= 2 ? 'bg-pink-600 text-white shadow-lg' : 'border border-gray-400 text-gray-300'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Show timing → Seat Selection → Payment → E-Ticket
          </p>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-8 tracking-wide">
          Seat Booking
        </h2>

        {/* Main Layout */}
        <div className="bg-white/5 p-6 rounded-2xl flex flex-col lg:flex-row gap-8 shadow-2xl">
          {/* Seat Grid */}
          <div className="flex-1">
            <div className="bg-pink-600 text-center py-2 rounded-lg mb-6 font-semibold tracking-wider shadow">
              SCREEN
            </div>

            {/* Sections */}
            {Object.entries(SECTION_MAP).map(([sectionName, rows]) => (
              <div key={sectionName} className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-pink-400">
                  🎟 {sectionName}
                </h3>
                <div className="grid gap-3">
                  {rows.map((rowNum) => (
                    <div key={rowNum} className="flex justify-center gap-2">
                      {Array.from({ length: COLS }, (_, colIdx) => {
                        const seatKey = `${rowNum}-${colIdx + 1}`;
                        const isSold = soldSeats.includes(seatKey);
                        const isSelected = selectedSeats.includes(seatKey);
                        return (
                          <button
                            key={seatKey}
                            onClick={() => toggleSeat(rowNum, colIdx + 1)}
                            className={`w-8 h-8 text-xs rounded-md font-semibold shadow-md transition-all duration-200 transform
                              ${
                                isSold
                                  ? 'bg-red-600 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-green-600 text-white scale-110'
                                  : 'bg-gray-500 hover:bg-pink-500 hover:scale-110'
                              }`}
                          >
                            {colIdx + 1}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info Panel */}
          <div className="lg:w-1/3 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 border-b border-pink-600 pb-2">Movie Info</h3>
              <p><strong>Movie:</strong> Commando 3</p>
              <p><strong>Time:</strong> April 12, 22:00</p>
              <p><strong>Tickets:</strong> {selectedSeats.length}</p>
              <p><strong>Total:</strong> Rs. {selectedSeats.length * PRICE}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Selected Seats</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSeats.length > 0 ? (
                  selectedSeats.map(seat => (
                    <span
                      key={seat}
                      className="px-2 py-1 bg-green-600 rounded text-sm font-medium"
                    >
                      {seat}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">No seats selected</p>
                )}
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-500 rounded-sm"></div> Available
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded-sm"></div> Sold
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded-sm"></div> Selected
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition shadow"
          >
            ← Back
          </button>
          <button
            onClick={handleProceed}
            disabled={selectedSeats.length === 0}
            className={`px-6 py-2 rounded-full text-white font-bold transition shadow-md ${
              selectedSeats.length === 0
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-pink-600 hover:bg-pink-700'
            }`}
          >
            Proceed to Payment →
          </button>
        </div>
      </div>
    </div>
  );
}
