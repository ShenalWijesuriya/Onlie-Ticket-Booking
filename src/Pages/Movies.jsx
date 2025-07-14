import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const moviesData = {
  English: [
    {
      id: 1,
      title: 'Inception',
      poster: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg',
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster: 'https://m.media-amazon.com/images/I/51EbJjl9cQL._AC_SY679_.jpg',
    },
    {
      id: 3,
      title: 'Avengers: Endgame',
      poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
    },
    {
      id: 10,
      title: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/I/71n58GYXShL._AC_SY679_.jpg',
    },
    {
      id: 11,
      title: 'Titanic',
      poster: 'https://m.media-amazon.com/images/I/51ASdIS5DZL._AC_SY679_.jpg',
    },
  ],
  Tamil: [
    {
      id: 4,
      title: 'Baahubali',
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Baahubali_poster.jpg',
    },
    {
      id: 5,
      title: 'Master',
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Master_poster.jpg',
    },
    {
      id: 6,
      title: 'Vikram',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDM3ZTQwZjktNmZmOS00ZGEwLWEzMDItNWRkMzVlM2JlODBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    },
    {
      id: 12,
      title: 'Soorarai Pottru',
      poster: 'https://m.media-amazon.com/images/M/MV5BZjNmZjdmZjUtMGI4YS00OTYwLTk4NTMtMDM5NzE0N2FiNjJlXkEyXkFqcGdeQXVyNjg4NDAwMTQ@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 13,
      title: 'Asuran',
      poster: 'https://upload.wikimedia.org/wikipedia/en/9/95/Asuran_poster.jpg',
    },
  ],
  Sinhala: [
    {
      id: 7,
      title: 'Machan',
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Machan_movie_poster.jpg',
    },
    {
      id: 8,
      title: 'Oba Nathuwa Oba Ekka',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2NjQwODQzNl5BMl5BanBnXkFtZTgwMjQwMDI2NTE@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 9,
      title: 'Ho Gaana Pokuna',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1NjA5MTYxNF5BMl5BanBnXkFtZTcwNjU5MTIxNw@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 14,
      title: 'Sankara',
      poster: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Sankara_film_poster.jpg',
    },
    {
      id: 15,
      title: 'Aloko Udapadi',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTYxMzM5MDM5OF5BMl5BanBnXkFtZTgwNzQxMDI3NjE@._V1_FMjpg_UX1000_.jpg',
    },
  ],
};

function Movies() {
  useEffect(() => {
    const cards = document.querySelectorAll('.movie-card');
    cards.forEach((card, index) => {
      card.classList.add(index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right');
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
          Now Showing at CineEpic
        </h1>

        {Object.entries(moviesData).map(([category, movies], catIndex) => (
          <section key={category} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text inline-block">
              {category} Movies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map(({ id, title, poster }, index) => (
                <div
                  key={id}
                  className="movie-card relative bg-gray-800/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 opacity-0 border border-gray-700/50"
                  style={{ animationDelay: `${(catIndex * movies.length + index) * 100}ms` }}
                >
                  <img
                    src={poster}
                    alt={title}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                    <Link
                      to={`/showtimes/${id}`}
                      className="mt-auto py-3 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Movies;
