import { useState } from 'react';

function SignUp() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'birthday') {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setForm((prev) => ({ ...prev, birthday: value, age }));
    } else if (name === 'contact') {
      const cleaned = value.replace(/\D/g, '').slice(0, 10);
      setForm((prev) => ({ ...prev, contact: cleaned }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        profilePhoto: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(form));
    alert('🎉 Account created!');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl bg-gray-800/80 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 mb-6">
          Create Your CineEpic Account
        </h1>
        <div className="flex flex-col items-center mb-6">
          <label className="relative cursor-pointer group">
            <input
              type="file"
              onChange={handlePhotoUpload}
              accept="image/*"
              className="hidden"
            />
            <div className="w-28 h-28 bg-gray-700/50 rounded-full border-4 border-gray-600/50 overflow-hidden group-hover:border-red-500/50 transition-all duration-300">
              {form.profilePhoto ? (
                <img
                  src={form.profilePhoto}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                  Upload
                </div>
              )}
            </div>
          </label>
          <p className="text-sm text-gray-400 mt-2">Tap to upload profile photo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
            <input
              type="text"
              name="age"
              value={form.age}
              placeholder="Age"
              readOnly
              className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-md text-gray-400 cursor-not-allowed"
            />
          </div>

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-3 rounded-md font-semibold transition-all duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;