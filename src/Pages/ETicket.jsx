// ETicket.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ETicket() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    movieName = 'Movie Name',
    screen = '18',
    row = 'H',
    seat = '24',
    price = 'Rs.12.00',
    date = '4/13/21',
    time = '19:30',
    poster = 'https://upload.wikimedia.org/wikipedia/en/0/05/Only_God_Forgives_poster.jpg',
  } = state || {};

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="flex justify-center items-center space-x-6 mb-8">
        <div className="w-8 h-8 rounded-full bg-pink-600 text-center leading-8 text-sm font-bold">1</div>
        <div className="w-8 h-8 rounded-full bg-pink-600 text-center leading-8 text-sm font-bold">2</div>
        <div className="w-8 h-8 rounded-full bg-pink-600 text-center leading-8 text-sm font-bold">3</div>
        <div className="w-8 h-8 rounded-full border border-white text-center leading-8 text-sm font-bold bg-white text-black">4</div>
      </div>
      <h2 className="text-2xl font-bold text-pink-500 mb-8">E-Ticket</h2>

      <div className="bg-white text-black w-80 rounded-xl relative p-4">
        <div className="text-center">
          <h3 className="font-bold text-lg">MyShowz Entertainment</h3>
          <p className="text-sm text-gray-600">{movieName}</p>
        </div>

        <div className="mt-4">
          <img src={poster} alt="Movie Poster" className="w-full h-48 object-cover rounded-md" />
        </div>

        <div className="mt-4 grid grid-cols-2 text-sm gap-y-1">
          <p className="font-bold">Screen</p><p>{screen}</p>
          <p className="font-bold">Row</p><p>{row}</p>
          <p className="font-bold">Seat</p><p>{seat}</p>
          <p className="font-bold">Price</p><p>{price}</p>
          <p className="font-bold">Date</p><p>{date}</p>
          <p className="font-bold">Time</p><p>{time}</p>
        </div>

        <div className="border-t border-gray-400 mt-4 py-3">
          <p className="text-center text-sm tracking-widest">917375445414781342</p>
          <div className="mt-2 flex justify-center">
            <div className="h-12 bg-black w-full" />
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-8 px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
      >
        Browse to Home Page
      </button>
    </div>
  );
}
