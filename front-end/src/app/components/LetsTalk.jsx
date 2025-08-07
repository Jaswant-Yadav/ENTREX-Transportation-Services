import React from "react";
import TalkForm from "./TalkForm";

const LetsTalk = () => {
  return (
    <div className="px-50 py-6 w-full bg-[#F5F7FA] flex flex-col gap-16 items-center">
    
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 w-full max-w-6xl">

        <div className="flex flex-col gap-8 text-black w-full md:w-1/2">
 
          <h1 className="text-6xl font-semibold text-black">Let’s Talk</h1>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium"><strong>Email</strong></h3>
            <p className="text-gray-700">bookings@entrex.in</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium"><strong>Socials</strong></h3>
            <ul className="space-y-1 text-gray-700 underline">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-brown p-8 rounded-2xl">
          <TalkForm />
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
