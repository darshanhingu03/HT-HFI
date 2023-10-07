import React from "react";
import styles from "./FoodOptions.module.css"; // Import the CSS module

function FoodOptions({ selectedOption, onSelectOption }) {

  const foodOptions = ["All", "Roties", "Veg", "NonVeg", "Punjabi", "Gujarati"]; // Add more options as needed

  return (
    <div
      className={`${styles.foodOptions} my-4 font-[inter]`}
    >
      {/* Apply the .foodOptions class */}
      {foodOptions.map((option, index) => (
        <div key={index} className={styles.optionWrapper}>
          {/* Apply the .optionWrapper class */}
          <button
            onClick={() => onSelectOption(option)}
            className={`${styles.optionButton} ml-8 ${
              selectedOption === option ? styles.active : ""
            }`}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FoodOptions;
