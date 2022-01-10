import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "../style/historykarbon.css";
import "react-datepicker/dist/react-datepicker.css";

export default function HistoryKarbon() {
	const [hidden, sethidden] = useState(true);
	const [startDate, setStartDate] = useState(null);
	const [name, setName] = useState("Hari ini");
	const myRefname = useRef(null);
	const convert = (str) => {
		let date = str;
		let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);
		return [date.getFullYear(), mnth, day].join("/");
	};
	const handleClick = (date, e) => {
		sethidden(false);
		myRefname.current.setFocus(true);
		let newdate = convert(date);
		setName(newdate);
	};
	useEffect(() => {
		if (hidden === false) {
			myRefname.current.setFocus(true);
			sethidden(true);
		}
	}, [hidden]);
	return (
		<div className="container mt-4">
			<div className="d-flex flex-column">
				<div class="dropdown ms-auto me-auto">
					<button
						class="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{name}
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li onClick={() => setName("Hari ini")}>
							<p className="dropdown-item">Hari ini</p>
						</li>
						<li onClick={() => handleClick()}>
							<p className="dropdown-item">Pilih Tanggal</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="d-flex flex-column">
				<DatePicker
					className={hidden ? "d-none" : "d-block"}
					selected={startDate}
					onChange={(date, e) => handleClick(date, e)}
					ref={myRefname}
					withPortal
				/>
				<div className="ms-auto me-auto mt-3">
					<img
						src="https://cdn-icons-png.flaticon.com/128/814/814513.png"
						className="img-fluid"
					/>
				</div>
				<div className="d-flex flex-column align-content-center ms-auto me-auto mt-5">
					<h4 className="fw-bold ms-auto me-auto ">Tahukah kamu? </h4>
					<h5 className="fw-light ms-auto me-auto">
						Makanan yang kamu makan {name}
					</h5>
					<h5 className="text-center fw-light">menghasilkan karbon sebesar</h5>
					<div className="d-flex justify-content-center">
						<h3 className=" text-primary">220</h3>
						<h3>kg</h3>
					</div>
					<h5 className="text-center fw-light">
						Yang setara dengan kamu berkendara
					</h5>
					<h5 className="text-center fw-light">Mobil selama 9 menit</h5>

					<img
						src="https://cdn-icons-png.flaticon.com/128/575/575703.png"
						className="img-fluid ms-auto me-auto"
					/>
				</div>
			</div>
			<div className="">
				<h5>test</h5>
			</div>
		</div>
	);
}
