"use client";

import { useState } from "react";
import axios from "axios";

export default function TalkForm() {
  const [formData, setFormData] = useState({
    name: "",
    from_email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://back-entrex.onrender.com/api/talk", formData);
      setStatus("Form submitted successfully!");
      setFormData({
        name: "",
        from_email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      setStatus("Submission failed. Try again.");
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-8 rounded-lg bg-white px-4"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full h-8 rounded-lg bg-white px-4"
          />
        </div>
        <div>
          <label className="block mb-1">What service are you interested in?</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full h-8 rounded-lg bg-white px-4 text-gray-500"
          >
            <option value="">Select project type</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full h-8 rounded-lg bg-white px-4 text-gray-500"
          >
            <option value="">Select project budget</option>
            <option value="Less than $1000">Less than $1000</option>
            <option value="$1000 - $5000">$1000 - $5000</option>
            <option value="More than $5000">More than $5000</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            rows="2"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-lg bg-white p-4"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg border border-cyan h-8 font-bold text-white text-xl hover:bg-black bg-black transition-all duration-500"
        >
          Submit
        </button>

        {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
      </form>
    </div>
  );
}
