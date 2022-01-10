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

export default function HistoryKarbon2() {
	const [hidden, sethidden] = useState(true);
	const [startDate, setStartDate] = useState(null);
	const [name, setName] = useState("Hari ini");
	const myRefname = useRef(null);
	const borderRadiusAllCorners = {
		topLeft: 50,
		topRight: 50,
		bottomLeft: 50,
		bottomRight: 50,
	};
	const data = (first, second) => ({
		labels: ["karbon 1"],
		datasets: [
			{
				label: "Nutrisi Terpenuhi",
				data: [first],
				backgroundColor: ["#F9AC3A"],
				borderColor: ["#F9AC3A"],
				borderWidth: 1,
				borderRadius: borderRadiusAllCorners,
				borderSkipped: false,
				barThickness: 15,
			},
			{
				label: "Nutrisi Belum Terpenuhi",
				data: [second],
				backgroundColor: ["transparent"],
				borderColor: ["transparent"],
				borderWidth: 1,
				borderRadius: borderRadiusAllCorners,
				borderSkipped: false,
				barThickness: 15,
			},
		],
	});
	const maxdata = (total) => ({
		labels: ["karbon 1"],
		datasets: [
			{
				label: "My First Dataset",
				data: [12],
				backgroundColor: ["white"],
				borderColor: ["white"],
				borderWidth: 1,
				borderRadius: borderRadiusAllCorners,
				borderSkipped: false,
				barThickness: 15,
			},
		],
	});
	const config = {
		indexAxis: "y",
		plugins: {
			legend: {
				display: false,
			},
		},
		responsive: true,
		maintainAspectRatio: true,
		scales: {
			y: {
				display: false,
				stacked: true,
			},
			x: {
				display: false,
				stacked: true,
			},
		},
	};
	const config1 = {
		indexAxis: "y",
		plugins: {
			legend: {
				display: false,
			},
		},
		animation: {
			duration: 0,
		},
		responsive: true,
		maintainAspectRatio: true,
		scales: {
			y: {
				display: false,
				stacked: true,
			},
			x: {
				display: false,
				stacked: true,
			},
		},
	};
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
				<div className="bg-primary rounded" style={{ height: "600px" }}>
					<div
						className="ms-auto me-auto d-flex justify-content-between"
						style={{ width: "80%" }}
					>
						<div className="custom-rows ">
							<Bar data={data(9, 3)} options={config} id="stacked1" />
							<Bar data={maxdata(12)} options={config1} id="stacked" />
						</div>
						<div className="custom-rows ">
							<Bar data={data(9, 3)} options={config} id="stacked1" />
							<Bar data={maxdata(12)} options={config1} id="stacked" />
						</div>
						<div className="custom-rows ">
							<Bar data={data(8, 4)} options={config} id="stacked1" />
							<Bar data={maxdata(12)} options={config1} id="stacked" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
