import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Navbar = () => {
	const count = useSelector((state) => state.length);

	return (
		<>
			<div className="main-navbar-section flex justify-between items-center text-white font-bold bg-black px-8 pr-[12px] py-[12px]">
				<div className="left-section">
					<Image src="/Menu.png" alt="Logo" width={50} height={50} />
				</div>

				<div className="flex gap-x-[12px]">
					<button className="bg-[#f00] hover:bg-red-500  px-[24px] sm:px-[36px] py-[8px] sm:py-[12px] rounded-full text-white spacing font-medium">VEG</button>
					<button className="bg-red-900 hover:bg-red-500 px-[24px] sm:px-[36px] py-[8px] sm:py-[12px] rounded-full text-white spacing font-medium">NON-VEG</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
