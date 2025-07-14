import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [error, setError] = useState('');

  const ticketDetails = {
    movie: 'Only God Forgives',
    screen: '18',
    row: 'H',
    seat: '24',
    price: 12.0,
    date: '4/13/21',
    time: '19:30',
  };

  useEffect(() => {
    localStorage.setItem('ticketDetails', JSON.stringify(ticketDetails));
  }, []);

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv || !cardHolder) {
      setError('⚠️ Please fill in all fields.');
      return;
    }

    const cardRegex = /^\d{4}-\d{4}-\d{4}-\d{1}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3,4}$/;

    if (!cardRegex.test(cardNumber)) {
      setError('⚠️ Card number must be in XXXX-XXXX-XXXX-X format (13 digits).');
      return;
    }
    if (!expiryRegex.test(expiry)) {
      setError('⚠️ Expiry must be in MM/YY format.');
      return;
    }
    if (!cvvRegex.test(cvv)) {
      setError('⚠️ CVV must be 3 or 4 digits.');
      return;
    }

    setError('');
    alert('🎉 Payment Successful! E-Ticket will be sent to your email.');
    navigate('/eticket');
  };

  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-black min-h-screen text-white flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl space-y-8 border border-white/20">
        {/* Steps */}
        <div className="flex justify-center space-x-4 mb-4">
          {['1', '2', '3', '4'].map((step, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                i < 3 ? 'bg-pink-600 text-white' : 'border border-gray-400 text-gray-300'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-300 text-sm">
          Show timing → Seat Selection → <span className="text-white font-semibold">Payment</span> → E-Ticket
        </p>

        <h2 className="text-4xl font-bold text-center text-pink-500">Make Payment</h2>

        {error && <p className="text-red-500 text-center font-medium">{error}</p>}

        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-1 block">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '');
                value = value.slice(0, 13);
                const formatted = value.match(/.{1,4}/g)?.join('-') ?? value;
                setCardNumber(formatted);
              }}
              placeholder="XXXX-XXXX-XXXX-X"
              className="w-full px-4 py-3 rounded-xl text-black outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-sm font-medium mb-1 block">Expiry Date</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '').slice(0, 4);
                  if (value.length >= 3) {
                    value = value.slice(0, 2) + '/' + value.slice(2);
                  }
                  setExpiry(value);
                }}
                placeholder="MM/YY"
                className="w-full px-4 py-3 rounded-xl text-black outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm font-medium mb-1 block">CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '').slice(0, 4);
                  setCvv(value);
                }}
                placeholder="***"
                className="w-full px-4 py-3 rounded-xl text-black outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Cardholder Name</label>
            <input
              type="text"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl text-black outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div className="flex justify-between pt-6">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-white font-medium"
            >
              ← Back
            </button>

            <button
              onClick={handlePayment}
              className="px-6 py-2 rounded-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold shadow-md"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
