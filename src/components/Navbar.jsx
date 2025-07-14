import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProfileDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-1 rounded-full hover:bg-gradient-to-r from-red-500 to-pink-600 focus:outline-none transition transform hover:scale-105"
        aria-label="User menu"
      >
        {user?.profilePhoto ? (
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-md"
          />
        ) : (
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A9 9 0 1118.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl ring-1 ring-black/10 z-50 overflow-hidden text-gray-800 transition ease-out duration-200">
          {user ? (
            <>
              <div className="flex flex-col items-center text-center px-6 py-5 bg-gradient-to-b from-red-100 to-pink-50 rounded-t-2xl">
                <img
                  src={user.profilePhoto}
                  alt="User"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover -mt-12 mb-2"
                />
                <h3 className="font-semibold text-xl text-pink-700">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm text-pink-600">{user.email}</p>
                <p className="text-sm text-pink-600">
                  Age: {user.age}, Gender: {user.gender}
                </p>
                <p className="text-sm text-pink-600">📞 {user.contact}</p>
              </div>
              <div className="flex justify-center mb-6 mt-4">
                <button
                  onClick={handleLogout}
                  className="w-11/12 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow hover:from-pink-600 hover:to-red-500 transition"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="px-6 py-6 text-center space-y-4">
              <svg
                className="mx-auto w-16 h-16 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A9 9 0 1118.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="font-semibold text-lg text-gray-700">
                Welcome to CineEpic!
              </h3>
              <p className="text-sm text-gray-500">
                Sign up or login to manage your profile and bookings.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow hover:from-cyan-500 hover:to-blue-500 transition"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="w-full py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const profile = localStorage.getItem('userProfile');
    if (profile) {
      setUser(JSON.parse(profile));
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 hover:from-pink-600 hover:to-red-400 transition"
          >
            CineEpic
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 font-medium text-gray-300">
            {['Home', 'Movies', 'Showtimes', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative px-1 py-2 hover:text-pink-500 transition"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform hover:scale-x-100"></span>
              </Link>
            ))}
            <ProfileDropdown user={user} />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <ProfileDropdown user={user} />
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-pink-500 transition"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-5 py-3 space-y-3 bg-gray-800 text-gray-200 rounded-b-lg shadow-inner transition">
          {['Home', 'Movies', 'Showtimes', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="block py-2 px-3 rounded hover:bg-pink-600 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
