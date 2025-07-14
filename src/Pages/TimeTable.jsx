import React from 'react';

const timetable = {
  Monday: [
    { title: 'Inception', start: '10:00 AM', end: '12:30 PM' },
    { title: 'Baahubali', start: '1:30 PM', end: '4:30 PM' },
    { title: 'Machan', start: '5:00 PM', end: '6:45 PM' },
  ],
  Tuesday: [
    { title: 'Interstellar', start: '10:00 AM', end: '12:45 PM' },
    { title: 'Master', start: '1:30 PM', end: '4:00 PM' },
    { title: 'Ho Gaana Pokuna', start: '5:00 PM', end: '6:30 PM' },
  ],
  Wednesday: [
    { title: 'Titanic', start: '10:00 AM', end: '1:00 PM' },
    { title: 'Vikram', start: '1:30 PM', end: '4:00 PM' },
    { title: 'Oba Nathuwa Oba Ekka', start: '5:00 PM', end: '6:45 PM' },
  ],
  Thursday: [
    { title: 'The Dark Knight', start: '10:00 AM', end: '12:45 PM' },
    { title: 'Soorarai Pottru', start: '1:30 PM', end: '3:45 PM' },
    { title: 'Sankara', start: '5:00 PM', end: '6:30 PM' },
  ],
  Friday: [
    { title: 'Avengers: Endgame', start: '10:00 AM', end: '1:00 PM' },
    { title: 'Asuran', start: '1:30 PM', end: '4:00 PM' },
    { title: 'Aloko Udapadi', start: '5:00 PM', end: '6:50 PM' },
  ],
  Saturday: [
    { title: 'The Batman', start: '10:00 AM', end: '12:30 PM' },
    { title: 'Theri', start: '1:30 PM', end: '4:00 PM' },
    { title: 'Machan', start: '5:00 PM', end: '6:45 PM' },
  ],
  Sunday: [
    { title: 'Avatar', start: '10:00 AM', end: '12:50 PM' },
    { title: 'Jailer', start: '1:30 PM', end: '4:00 PM' },
    { title: 'Oba Nathuwa Oba Ekka', start: '5:00 PM', end: '6:45 PM' },
  ],
};

export default function TimeTable() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
          Weekly Movie Showtimes
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-xl text-white">
            <thead className="bg-gradient-to-r from-red-600 to-red-800">
              <tr>
                <th className="px-6 py-3 text-lg font-semibold text-left">Day</th>
                <th className="px-6 py-3 text-lg font-semibold text-left">Movie 1</th>
                <th className="px-6 py-3 text-lg font-semibold text-left">Movie 2</th>
                <th className="px-6 py-3 text-lg font-semibold text-left">Movie 3</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(timetable).map(([day, movies]) => (
                <tr
                  key={day}
                  className="hover:bg-gray-700/50 transition-all duration-200"
                >
                  <td className="px-6 py-4 font-semibold border-b border-gray-700/50">
                    {day}
                  </td>
                  {movies.map(({ title, start, end }, index) => (
                    <td
                      key={index}
                      className="px-6 py-4 border-b border-gray-700/50"
                    >
                      <span className="block font-medium">{title}</span>
                      <span className="text-sm text-gray-400">
                        ⏰ {start} – {end}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}