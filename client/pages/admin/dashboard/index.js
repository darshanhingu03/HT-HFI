import Link from "next/link";
import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { QRCode } from "react-qrcode-logo";

const Dashboard = () => {
	const [open, setOpen] = React.useState(false);
	const [qrValue, setQrValue] = React.useState("jeftar");

	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const downloadQRCode = () => {
		// Generate download with use canvas and stream
		const canvas = document.getElementById("qr-gen");
		const pngUrl = canvas
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream");
		let downloadLink = document.createElement("a");
		downloadLink.href = pngUrl;
		downloadLink.download = `${qrValue}.png`;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};
	return (
		<>
			<main className="flex flex-col w-full items-center justify-center h-screen">

				<div>
					{" "}
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-describedby="alert-dialog-slide-description"
					>
						<DialogTitle>{"Get your QR here."}</DialogTitle>
						<DialogContent className="flex justify-center">
							<DialogContentText id="alert-dialog-slide-description" className="items-center">
								<QRCode id="qr-gen" value="http://192.168.1.16:3000/menu" />
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={downloadQRCode}> download</Button>
						</DialogActions>
					</Dialog>
				</div>
				<p className="mb-8 text-white text-[24px] font-semibold">
					Check Orders History
				</p>{" "}
				<div className="flex flex-col gap-y-8 items-center text-white justify-center">
					<Link
						href={"./dashboard"}
						className="bg-transparent border-white hover:bg-gray-700 transition-all items-center justify-center flex text-lg border-[2px] rounded-md w-[400px] h-[100px]"
					>
						Check Pendding Orders
					</Link>
					<Link
						href={"./dashboard"}
						className="bg-transparent border-white hover:bg-gray-700 transition-all items-center justify-center flex text-lg border-[2px] rounded-md w-[400px] h-[100px]"
					>
						Check Today's Orders
					</Link>
					<Link
						href={"./dashboard"}
						className="bg-transparent border-white hover:bg-gray-700 transition-all items-center justify-center flex text-lg border-[2px] rounded-md w-[400px] h-[100px]"
					>
						Check This week's Orders
					</Link>
					<Button
						variant="outlined"
						className="text-white"
						onClick={handleClickOpen}

					>
						Download Your QR
					</Button>
				</div>
				<div className="absolute flex justify-center items-center bottom-[4%] right-[6%]">
					<Link
						href={"./dashboard/avail-items"}
						className="font-medium cursor-pointer sm:bottom-[6%] sm:right-[4%] text-white px-8 rounded-md"
					>
						Show All Items
					</Link>
					<Link
						href={"./dashboard/create-item"}
						className="bg-white font-medium flex items-center justify-center text-center hover:bg-gray-400 w-[150px] h-[50px] text-black p-6 rounded-md"
					>
						+ Add Items
					</Link>
				</div>
			</main>
		</>
	);
};

export default Dashboard;
