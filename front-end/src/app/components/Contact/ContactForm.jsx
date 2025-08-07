'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch('https://back-entrex.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Server error. Try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border-b w-full py-2 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border-b w-full py-2 focus:outline-none mt-6 md:mt-0"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border-b w-full py-2 focus:outline-none mt-6 md:mt-0"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          rows="2"
          value={formData.message}
          onChange={handleChange}
          className="border-b w-full py-2 focus:outline-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all"
        >
          Leave us a Message →
        </button>

        {status && (
          <p className="text-sm text-gray-600 mt-2">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
