import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 mb-6">
          📩 Contact Us
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <form className="space-y-5 bg-gray-800/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700/50">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-md w-full font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}