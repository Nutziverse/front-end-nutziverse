import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "../style/historykarbon.css";
import "react-datepicker/dist/react-datepicker.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../style/PieChart.css";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function HistoryKarbon3() {
	const [hidden, sethidden] = useState(true);
	const [startDate, setStartDate] = useState(null);
	const [name, setName] = useState("Hari ini");
	const myRefname = useRef(null);

	function convert(str) {
		let date = str;
		let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);
		return [date.getFullYear(), mnth, day].join("/");
	}
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
		<div className="container mt-4 mb-4">
			<div className="d-flex flex-column">
				<div class="dropdown ms-auto me-auto">
					<button
						class="btn btn-secondary dropdown-toggle"
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
			<div className="d-flex">
				<DatePicker
					className={hidden ? "d-none" : "d-block"}
					selected={startDate}
					onChange={(date, e) => handleClick(date, e)}
					ref={myRefname}
					withPortal
				/>
			</div>
			<div className="container mt-4">
				<div
					className="bg-primary d-flex flex-column py-5"
					style={{ borderRadius: "20px" }}
				>
					<h6 className="text-center text-white mb-3">
						Total karbon yang dihasilkan
					</h6>
					<div className="mx-auto d-flex mt-2">
						<img
							src={"https://cdn-icons-png.flaticon.com/128/599/599502.png"}
							height={"50px"}
						/>
						<h1 className="text-white my-auto">500</h1>
					</div>
					<h6 className="text-center text-white mt-3">ppm</h6>
				</div>
			</div>
		</div>
	);
}
