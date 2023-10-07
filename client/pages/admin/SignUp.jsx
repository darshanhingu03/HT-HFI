"use client";
import { useRouter } from "next/router";

import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //   const navigate = useNavigate();
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Send data to the server using fetch API
      try {
        console.log(formData);
        const response = await fetch("http://192.168.1.29:8080/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers as needed
          },
          body: JSON.stringify(formData),
        });
        // console.log(await response.json());
        if (response.status === 201) {
          // Registration successful
          setIsRegistered(true);
          console.log("truwe");
          router.push("/admin/dashboard"); // Replace "/login" with the actual login route
        } else {
          // Registration failed, handle errors
          const data = await response.json();
          if (data.errors) {
            setErrors(data.errors);
          }
        }
      } catch (error) {
        console.error("Error submitting registration form:", error);
        // Handle any network or other errors here
      }
    }
  };

  return (
    <div className="container mx-auto mt-10 text-white">
      {isRegistered ? (
        <div className="text-center">
          <h2 className="text-2xl text-green-600">Registration Successful</h2>
          <p>Thank you for registering!</p>
        </div>
      ) : (
        <>
          <h1 className="text-center font-bold text-5xl my-8">Sign-up:</h1>
          <form className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name={"username"}
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-black"
            >
              Register
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterForm;
