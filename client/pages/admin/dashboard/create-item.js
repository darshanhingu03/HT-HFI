"use client";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import csvtojson from "csvtojson";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isError, setIsError] = useState("");
  const [csvJson, setCsvJson] = useState(null);
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [categorisMain, setCategorisMain] = useState([]);
  const [subcMain, setSubcMain] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [radioOption, setRadioOption] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    const fetchMainCategories = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.29:8080/api/categorie/main",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        if (data.success === true) {
          setCategorisMain(data.data);
        } else {
          setIsError("Something went wrong!");
        }
      } catch (e) {
        console.log("Something went wrong!");
      }
    };

    fetchMainCategories();
  }, [token]);

  const fetchSubCategories = async (radioId) => {
    try {
      const response = await fetch(
        `http://192.168.1.29:8080/api/categorie/sub?mid=${radioId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      console.log("data-------", token);
      console.log("data-------", data);
      if (data.success === true) {
        setSubcMain(data.data);
      } else {
        setIsError("Something went wrong!");
      }
    } catch (e) {
      console.log("Something went wrong!");
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleRadioOption = (e) => {
    setRadioOption(e.target.value);
    fetchSubCategories(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemFields = { sid: selectedOption, name, price, image };
    try {
      const response = await fetch("http://192.168.1.29:8080/api/item", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemFields),
      });
      if (response.status === 201 && response.ok) {
        return router.push("/admin/dashboard");
      } else {
        setIsError("Something went wrong!");
      }
    } catch (error) {
      console.error("An error occurred", error);
      setIsError("Something went wrong!");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const csvData = e.target.result;
        try {
          const jsonArray = await csvtojson().fromString(csvData);
          setCsvJson(jsonArray);
          createCsvFileRequest(jsonArray);
        } catch (error) {
          console.error("Error converting CSV to JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  async function createCsvFileRequest(jsonArray) {
    try {
      const response = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonArray),
      });
      if (response.status === 201 && response.ok) {
        return router.push("/admin/dashboard");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("Something went wrong!");
      alert("Something went wrong!");
    }
  }

  return (
    <div className="text-white">
      <main className="bg-black flex flex-col items-center sm:justify-center gap-y-8 lg:h-screen min-h-screen max-sm:p-8">
        <p className="text-white text-[24px] font-medium">Item's Details</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-end">
          <div className="flex flex-col items-start justify-start">
            <p className="font-medium mb-4 text-lg">Item's Name</p>
            <input
              className="px-5 mb-8 border-gray-600 focus:border-white bg-transparent border-[2px] w-[400px] max-w-[80vw] text-white h-[48px] outline-none rounded-md"
              type="text"
              placeholder="Enter Item's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className="font-medium mb-2 text-lg">Choose Type</p>
            <div className="flex gap-x-8 mb-8">
              {categorisMain.map((item, index) => {
                return (
                  <div className="flex gap-x-2" key={index}>
                    <input
                      type="radio"
                      id={item._id}
                      name="category"
                      onChange={handleRadioOption}
                      value={item._id}
                    />
                    <label htmlFor={item._id}>
                      {item.categories_name.toString()}
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="mb-4">
              <label htmlFor="subTypeSelect">Select an option</label>
              <select
                className="bg-black focus:border-white ml-4 appearance-none cursor-pointer text-white border-gray-500 text-center px-[36px] border-[2px] py-[6px] rounded-full"
                id="subTypeSelect"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select Option</option>
                {subcMain.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.categories_name}
                  </option>
                ))}
              </select>
            </div>

            <p className="font-medium mb-4 text-lg">Item's Price</p>
            <input
              className="px-5 mb-8 border-gray-600 focus:border-white bg-transparent border-[2px] text-white w-[400px] max-w-[80vw] h-[48px] outline-none rounded-md"
              type="number"
              placeholder="Enter Item's price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className="font-medium mb-4 text-lg">Item's Image URL</p>
            <input
              className="px-5 mb-3 border-gray-600 focus:border-white bg-transparent border-[2px] text-white w-[400px] max-w-[80vw] h-[48px] outline-none rounded-md"
              type="url"
              placeholder="Enter Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            {isError ? (
              <p className="text-red-500 float-left text-left">
                {isError.toString()}
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <input
            onClick={handleImportClick}
            type="file"
            onChange={handleFileInputChange}
            ref={fileInputRef}
            className="hidden"
          ></input>
          <button
            type="submit"
            className="bg-white font-medium mt-6 mb-2 hover:bg-gray-400 transition-all h-[48px] text-black rounded-md w-[130px]"
          >
            Create
          </button>
        </form>
      </main>
    </div>
  );
};

export default Admin;
