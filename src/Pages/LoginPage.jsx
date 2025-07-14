import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation example
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // TODO: Replace with real login logic
    if (email === 'user@example.com' && password === 'password') {
      // Save user info to localStorage (mock)
      localStorage.setItem(
        'userProfile',
        JSON.stringify({
          firstName: 'Demo',
          lastName: 'User',
          email,
          profilePhoto: '', // or add default
          age: 30,
          gender: 'Other',
          contact: '1234567890',
        })
      );
      setError('');
      navigate('/'); // Redirect to home after login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-red-700 via-red-900 to-gray-900 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-4xl text-white text-center mb-8">CineEpic</h1>
        <div className="bg-white shadow-lg rounded-lg px-8 py-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
            Login to your account
          </h2>
          {error && (
            <p className="mb-4 text-red-600 text-center font-medium">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:border-red-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-600 focus:border-red-600"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-700 hover:bg-red-800 text-white rounded-md font-semibold text-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{' '}
            <Link
              to="/signup"
              className="text-red-700 hover:text-red-900 font-semibold"
            >
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
