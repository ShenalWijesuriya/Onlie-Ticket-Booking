import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ROWS = 10;
const COLS = 10;
const PRICE = 850;
const soldSeats = [
  '1-2', '4-4', '4-5', '4-6',
  '6-6', '7-6', '8-5', '8-6', '8-7', '8-8'
];

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

    // Save selected seats to localStorage
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));

    navigate('/payment');
  };

  return (
    <div className="bg-black text-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Steps */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 rounded-full bg-pink-600 text-center leading-8 font-bold">1</div>
            <div className="w-8 h-8 rounded-full bg-pink-600 text-center leading-8 font-bold">2</div>
            <div className="w-8 h-8 rounded-full border border-gray-400 text-center leading-8">3</div>
            <div className="w-8 h-8 rounded-full border border-gray-400 text-center leading-8">4</div>
          </div>
          <div className="text-sm text-gray-300">
            Show timing selection → Seat Selection → Payment → E-Ticket
          </div>
        </div>

        {/* Seat Title */}
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-6">Seat Booking</h2>

        <div className="bg-gray-900 p-6 rounded-lg flex gap-8 shadow-xl">
          {/* Seat Map */}
          <div className="flex-1">
            <div className="bg-pink-600 text-center py-2 rounded mb-4 font-semibold">SCREEN</div>
            <div className="grid grid-rows-10 gap-2">
              {Array.from({ length: ROWS }, (_, rowIdx) => (
                <div key={rowIdx} className="flex gap-2 justify-center items-center">
                  {Array.from({ length: COLS }, (_, colIdx) => {
                    const seatKey = `${rowIdx + 1}-${colIdx + 1}`;
                    const isSold = soldSeats.includes(seatKey);
                    const isSelected = selectedSeats.includes(seatKey);
                    return (
                      <button
                        key={seatKey}
                        className={`w-8 h-8 rounded text-sm font-semibold
                          ${isSold ? 'bg-red-600 cursor-not-allowed' :
                          isSelected ? 'bg-green-600' : 'bg-gray-400'}
                          hover:scale-110 transition`}
                        onClick={() => toggleSeat(rowIdx + 1, colIdx + 1)}
                      >
                        {colIdx + 1}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Seat Info */}
          <div className="w-1/3">
            <h3 className="text-2xl font-bold mb-4">Movie Info</h3>
            <p><strong>Movie</strong>: Commando 3</p>
            <p><strong>Time</strong>: April 12, 22:00</p>
            <p><strong>Tickets</strong>: {selectedSeats.length}</p>
            <p><strong>Total</strong>: Rs.{selectedSeats.length * PRICE}</p>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Selected Seats</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSeats.map(seat => (
                  <span
                    key={seat}
                    className="px-2 py-1 bg-green-600 rounded text-sm font-medium"
                  >
                    {seat}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div> Available
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded"></div> Sold
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div> Selected
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-600 rounded-full hover:bg-gray-700"
          >
            Back
          </button>
          <button
            onClick={handleProceed}
            className={`px-6 py-2 rounded-full text-white transition ${
              selectedSeats.length === 0
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-pink-600 hover:bg-pink-700'
            }`}
            disabled={selectedSeats.length === 0}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
