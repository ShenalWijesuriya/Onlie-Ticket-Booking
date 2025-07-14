import BgCard from '../components/BgCard.jsx';

const movies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    poster: 'https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    genre: 'Action',
    poster: 'https://m.media-amazon.com/images/I/71pox6f2MHL._AC_SL1000_.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Adventure',
    poster: 'https://m.media-amazon.com/images/I/81J9gW0W8LL._AC_SL1500_.jpg',
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    genre: 'Superhero',
    poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg',
  },
  {
    id: 5,
    title: 'Joker',
    genre: 'Drama',
    poster: 'https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SL1500_.jpg',
  },
  {
    id: 6,
    title: 'Toy Story 4',
    genre: 'Animation',
    poster: 'https://m.media-amazon.com/images/I/91NeyXmS+XL._AC_SL1500_.jpg',
  },
  {
    id: 7,
    title: 'Frozen II',
    genre: 'Animation',
    poster: 'https://m.media-amazon.com/images/I/81Kt3FQK6IL._AC_SL1500_.jpg',
  },
  {
    id: 8,
    title: 'Parasite',
    genre: 'Thriller',
    poster: 'https://m.media-amazon.com/images/I/91zG6j-OyYL._AC_SL1500_.jpg',
  },
  {
    id: 9,
    title: 'Black Panther',
    genre: 'Superhero',
    poster: 'https://m.media-amazon.com/images/I/81+vE5WYBvL._AC_SL1500_.jpg',
  },
  {
    id: 10,
    title: 'Spider-Man: No Way Home',
    genre: 'Superhero',
    poster: 'https://m.media-amazon.com/images/I/81tK5WQ7VbL._AC_SL1500_.jpg',
  },
  {
    id: 11,
    title: 'Dune',
    genre: 'Sci-Fi',
    poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg',
  },
  {
    id: 12,
    title: 'The Batman',
    genre: 'Action',
    poster: 'https://m.media-amazon.com/images/I/91+vE5WYBvL._AC_SL1500_.jpg',
  },
];

// Manually categorize movies (placeholders for Tamil/Sinhala)
const moviesByCategory = {
  English: [
    movies.find(m => m.id === 1), // Inception
    movies.find(m => m.id === 2), // The Dark Knight
    movies.find(m => m.id === 3), // Interstellar
    movies.find(m => m.id === 4), // Avengers: Endgame
    movies.find(m => m.id === 5), // Joker
    movies.find(m => m.id === 9), // Black Panther
    movies.find(m => m.id === 10), // Spider-Man: No Way Home
    movies.find(m => m.id === 12), // The Batman
  ],
  Tamil: [
    movies.find(m => m.id === 8), // Parasite (placeholder)
  ],
  Sinhala: [
    movies.find(m => m.id === 6), // Toy Story 4 (placeholder)
    movies.find(m => m.id === 7), // Frozen II (placeholder)
    movies.find(m => m.id === 11), // Dune (placeholder)
  ],
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BgCard />
        {Object.entries(moviesByCategory).map(([category, categoryMovies]) => (
          <section key={category} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 text-center">
              🎬 Upcoming {category} Movies
            </h2>
            <div className="overflow-hidden">
              <div className="flex w-max animate-scroll space-x-6">
                {[...categoryMovies, ...categoryMovies].filter(Boolean).map((movie, index) => (
                  <div
                    key={`${category}-${movie.id}-${index}`}
                    className="w-60 flex-shrink-0 bg-gray-800/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={movie.poster || 'https://via.placeholder.com/200x300?text=No+Image'}
                      alt={movie.title}
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
                      <p className="text-sm text-gray-400">{movie.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default HomePage;