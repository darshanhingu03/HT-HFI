import React, { useState } from "react";

const FAQSection = () => {
  const faqData = [
    {
      question: "1) What is MenuCrafter?",
      answer:
        "MenuCrafter is a revolutionary digital solution that transforms physical menus into QR codes. It provides a convenient and contactless way for restaurants and businesses to offer their menus to customers.",
    },
    {
      question: "2) How do I add items to my menu?",
      answer:
        "Adding items to your menu is a breeze. Simply log in to your account, go to the menu editor, and click the 'Add Item' button. You can then enter the item name, description, price, and upload a mouthwatering photo.",
    },
    {
      question: "3) Is MenuCrafter compatible with all types of restaurants?",
      answer:
        " Absolutely! MenuCrafter is designed to cater to various types of restaurants, including cafes, fine dining, fast food, and more. Our versatile platform can be tailored to suit your restaurant's specific needs.",
    },
    {
      question: "4) What if I need help or have questions",
      answer:
        "We're here to assist you! If you have any questions or need support, you can reach out to our customer service team via email or phone. We also provide helpful resources and tutorials to guide you every step of the way.",
    },
    {
      question: "5) Do you offer analytics and insights for my menu?",
      answer:
        "Yes, we do. MenuCrafter provides detailed analytics and insights into your menu's performance. You can track customer engagement, popular items, and more to make data-driven decisions.",
    },

    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="py-8 w-[90%] m-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <ul>
        {faqData.map((faq, index) => (
          <li key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full p-2 bg-white rounded-lg shadow-md focus:outline-none"
            >
              <span className="text-lg">{faq.question}</span>
              <span>{expandedIndex === index ? "▲" : "▼"}</span>
            </button>
            {expandedIndex === index && (
              <div className="mt-2 ml-2 text-gray-700">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;
