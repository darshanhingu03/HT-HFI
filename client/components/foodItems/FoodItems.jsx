"use client";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	IconButton,
	Paper,
} from "@mui/material";
import SpecialBanner from "../specialDish/SpecialBanner";
import styles from "./FoodIItems.module.css";
import {
	Add,
	AddCircleOutline,
	RemoveCircleOutline,
} from "@mui/icons-material";
import BillPage from "../summeryCard/SummaryCard";
import { cartReducer } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

function FoodItemCard({ name, type, price, image, addToBill }) {
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();

	const handleAddToPlate = () => {
		dispatch({
			type: "ADD_ITEM",
			payload: { name, price },
		});
		setQuantity(quantity + 1);
		addToBill({ name, price });
	};

	const handleRemoveFromPlate = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<Card
			variant="outlined"
			style={{ padding: "0px", marginBottom: "0rem", border: "none" }}
		>
			<img
				src={image}
				alt={name}
				style={{
					width: "100%",
					height: "20vh",
					maxHeight: "40vh",
					objectFit: "cover",
					borderRadius: "18px",
				}}
			/>

			<CardContent className="p-0 py-4">
				<Typography
					variant="h6"
					component="div"
					style={{
						color: "black",
						fontSize: "1.125rem",
						fontWeight: "500",
					}}
				>
					{name}
				</Typography>
				{/* <Typography variant="body2">{type}</Typography> */}
				{price && (
					<Typography
						variant="body2"
						style={{ fontSize: "24px", fontWeight: "700" }}
					>
						{price}
					</Typography>
				)}
			</CardContent>
			<CardActions
				style={{
					justifyContent: "center",
					padding: "0rem",
				}}
			>
				{quantity === 0 ? (
					<Button
						size="small"
						variant="contained"
						onClick={handleAddToPlate}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "#000",
							borderRadius: "25px",
							fontSize: "14px",
							width: "100%",
							padding: "12px",
						}}
					>
						Add To Plate
					</Button>
				) : (
					<div>
						<IconButton onClick={handleRemoveFromPlate}>
							<RemoveCircleOutline />
						</IconButton>
						{quantity}
						<IconButton onClick={handleAddToPlate}>
							<AddCircleOutline />
						</IconButton>
					</div>
				)}
			</CardActions>
		</Card>
	);
}

function FoodItems({ selectedOption }) {
	const [bill, setBill] = useState([]);
	const [showBill, setShowBill] = useState(false);
	const [data, setData] = useState([]);
	const count = useSelector((state) => state.length);

	const router = useRouter(); // Get the router object

	const addToBill = (item) => {
		setBill((prevBill) => [...prevBill, item]);
	};

	const handleShowBill = () => {
		router.push({
			pathname: "/menu/bill",
			query: { bill: JSON.stringify(bill) }, // Convert bill array to JSON string
		});
	};

	const removeFromBill = (itemIndex) => {
		setBill((prevBill) =>
			prevBill.filter((_, index) => index !== itemIndex)
		);
	};

	const toggleBillSection = () => {
		setShowBill(!showBill);
	};

	const fetchData = async () => {
		try {
			const respomse = await fetch(
				"http://192.168.1.29:8080/api/item/user",
				{
					method: "GET",
				}
			);
			if (respomse.status == 200) {
				const data = await respomse.json();
				// console.log("Response", data);
				setData(data.data);
			}
		} catch (error) {
			console.log("Something went wrong!");
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// setTimeout(() => {
	const specialDishItem = data.filter(
		(item) => item.item_name === "Veg Biryani"
	);
	// }, 1000);

	const filteredItems =
		selectedOption === "All"
			? data
			: data.filter((item) => item.type === selectedOption);

	return (
		<>
			<SpecialBanner specialItem={{
        item_name: "Palak Paneer",
        price: "360rs.",
        imageUrl: "https://latashaskitchen.com/wp-content/uploads/2019/06/SS_533073802_Palak-Paneer_500k.jpg"
      }} />
			<div
				className={styles.cardContainer}
				style={{ marginInline: "2rem" }}
			>
				{data.map((item) => (
					<div className={styles.card} key={item._id}>
						<FoodItemCard
							name={item.item_name}
							price={`${item.price}rs`}
							image={item.imageUrl}
							addToBill={addToBill}
						/>
					</div>
				))}
			</div>
			<button
				onClick={handleShowBill}
				className="fixed bottom-8 right-8 bg-[#f00] text-white py-[12px] px-[36px] rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
			>
				<ShoppingCartIcon /> : {count}
			</button>

			{showBill && <BillPage bill={bill} />}
		</>
	);
}

export default FoodItems;
