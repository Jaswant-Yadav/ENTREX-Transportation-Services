"use client";
import { useState } from "react";

export default function HeroForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    date: "",
    time: "",
    adults: "",
    children: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://back-entrex.onrender.com/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Form submitted successfully");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          date: "",
          time: "",
          adults: "",
          children: "",
          message: "",
        });
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <form className="space-y-4 text-black">
        <div className="flex gap-2">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-1/2 p-2 h-8 rounded border border-gray-300 "
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-1/2 p-2 h-8 rounded border border-gray-300"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 h-8 rounded border border-gray-300"
          required
        />
        <div className="flex gap-4 text-xs">
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-1/2 p-2 h-8 rounded border border-gray-300"
            required
          />
          
          <input
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            className="w-1/2 p-2 h-8 rounded border border-gray-300"
            required
          />
        
        </div>
        <div className="flex gap-4 text-xs">
          <select
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            className="w-1/2 p-2 h-8 rounded border border-gray-300"
            required
          >
            <option value="">Adults</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
          <select
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="w-1/2 p-2 h-8 rounded border border-gray-300"
            required
          >
            <option value="">Children</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2+">2+</option>
          </select>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-2 rounded border border-gray-300"
          rows="2"
        ></textarea>
        <div className="flex justify-between">
          <button
            type="reset"
            className="px-10 py-1 rounded-full border border-gray-300 font-semibold"
             onClick={() =>
              setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                date: "",
                time: "",
                adults: "",
                children: "",
                message: "",
              })
            }
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-white border border-orange-500 text-orange-500 font-semibold"
            onClick={handleSubmit}
          >
            Let's Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
