// components/FeatureCard.js
import React from "react";

function FeatureCard({ logoSrc, title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <div className="flex items-center mb-4">
        <img
          src={logoSrc}
          alt={title}
          className="w-12 h-12 mr-4 rounded-full"
        />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

export default FeatureCard;
