import React from "react";
import Image from "next/image"; // Import the next/image module

const CEOCard = (props) => {
  return (
    <div className="w-64 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-transform duration-300 m-auto">
      <Image
        className="w-full h-40 object-cover"
        src={props.Pic} // Replace with the actual path to your CEO's photo
        alt="CEO Photo"
        width={300} // Set the width (adjust as needed)
        height={200} // Set the height (adjust as needed)
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{props.Name}</h2>
        <p className="text-gray-700">
          {props.Name} is the CEO of our company. He has a wealth of experience
          in the industry and is dedicated to leading our team to success.
        </p>
      </div>
    </div>
  );
};

export default CEOCard;
