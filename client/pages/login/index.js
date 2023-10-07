import { useRouter } from "next/router";
import React, { useState } from "react";

const Admin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const adminCredentials = { email: username, password };
		try {
			const response = await fetch(
				"http://192.168.1.29:8080/auth/admin/login",
				{
					method: "POST", // Specify the HTTP method as POST
					headers: {
						"Content-Type": "application/json", // Set the content type to JSON
					},
					body: JSON.stringify(adminCredentials), // Convert the object to JSON
				}
			);
			if (response.status == 200 && response) {
				const data = await response.json();
				localStorage.setItem("token", data.data)
				return router.push("/admin/dashboard");
			} else {
				setIsError("Something went wrong!");
			}
		} catch (error) {
			console.error("An error occurred");
		}
		setIsError("Something went wrong!");
	};

	return (
		<>
			<main className="bg-black flex flex-col items-center justify-center gap-y-8 h-screen">
				<p className="text-white text-[24px] font-semibold">
					Admin Credential
				</p>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-end"
				>
					<div className="flex flex-col items-start justify-start">
						<input
							className="px-5 mb-8 border-gray-600 focus:border-white bg-transparent border-[2px] w-[400px] max-w-[80vw] text-white h-[48px] outline-none rounded-md"
							type="text"
							placeholder="Enter Admin Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)} // Update the username state
						/>
						<input
							className="px-5 mb-3 border-gray-600 focus:border-white bg-transparent border-[2px] text-white w-[400px] max-w-[80vw] h-[48px] outline-none rounded-md"
							type="text"
							placeholder="Enter Admin Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)} // Update the password state
						/>
						{isError ? (
							<p className="text-red-500 float-left text-left">
								{isError.toString()}
							</p>
						) : (
							<p></p>
						)}
					</div>
					<button
						type="submit"
						className="bg-white mt-6 font-medium hover:bg-gray-400 transition-all h-[48px] text-black rounded-md w-[130px]"
					>
						Login
					</button>
				</form>
			</main>
		</>
	);
};

export default Admin;
