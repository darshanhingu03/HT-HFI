import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function availItems() {
	const [items, setItems] = useState([]);
	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(
					"http://192.168.1.29:8080/api/item",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setItems(data.data);
			} catch (error) {
				console.log("Something went wrong!");
			}
		};
		fetchItems();
	}, []);

	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: 200,
		},
		{
			field: "itemName",
			headerName: "Item Name",
			width: 300,
		},
		{
			field: "price",
			headerName: "Price",
			width: 150,
		},
		{
			field: "imageUrl",
			headerName: "Image",
			// width: 150,
		},
	];

	const rows = items.map((item) => {
		return {
			id: item._id,
			itemName: item.item_name.toUpperCase(),
			price: item.price,
			imageUrl: item.imageUrl,
		};
	});

	return (
		<div className="text-white">
			<Box className="text-white" sx={{ height: "100vh", width: "75%", margin: "auto", color: "#fff" }}>
				<DataGrid
          sx={{ color: "#fff", borderColor: '#fff', borderWidth: "2" }}
					className="text-white"
					rows={rows}
					columns={columns}
				/>
			</Box>
		</div>
	);
}

export default availItems;
