import TrackingCard from "../components/TrackingCard";
import axios from "axios";
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
import { useDispatch, useSelector } from "react-redux";
import { getKeranjang } from "../redux/actions/action.keranjang";
import Layout from "../layouting/Layout";
import { set } from "react-hook-form";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function KeranjangMakanan() {
	const config = {
		indexAxis: "x",
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
		indexAxis: "x",
		plugins: {
			legend: {
				display: false,
			},
		},
		animation: {
			duration: 0,
		},

		events: [],

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
	const config2 = {
		indexAxis: "y",
		plugins: {
			legend: {
				display: false,
			},
		},
		animation: {
			duration: 0,
		},

		events: [],

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
	let local = localStorage.getItem("pilih_makanan");
	local = JSON.parse(local);
	let id = [];
	let jumlah = [];
	local.map((data) => id.push(data.makananID));
	local.map((data) => jumlah.push(data.porsi));

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getKeranjang(id));
	}, [dispatch]);
	const KeranjangState = useSelector((state) => state.keranjangReducer);
	const { keranjang } = KeranjangState;
	let DataKeranjang = keranjang.data;
	let Loading = KeranjangState.loading;
	const [proteins, setProteins] = useState(0);
	console.log(DataKeranjang);
	let Totalprotein,
		Totallemak,
		Totalkarbohidrat,
		Totalkalori = [];
	function add_array(data) {}
	let ar = [1, 2];
	if (!Loading) {
		Totalprotein = DataKeranjang.map((data) => data.protein);
		Totallemak = DataKeranjang.map((data) => data.lemak);
		Totalkarbohidrat = DataKeranjang.map((data) => data.karbohidrat);
		Totalkalori = DataKeranjang.map((data) => data.kaloriMakanan);
		Totalprotein = Totalprotein.reduce(function (r, a, i) {
			return r + a * jumlah[i];
		}, 0);
		Totallemak = Totallemak.reduce(function (r, a, i) {
			return r + a * jumlah[i];
		}, 0);
		Totalkarbohidrat = Totalkarbohidrat.reduce(function (r, a, i) {
			return r + a * jumlah[i];
		}, 0);
		Totalkalori = Totalkalori.reduce(function (r, a, i) {
			return r + a * jumlah[i];
		}, 0);
		console.log(Totalkarbohidrat, Totalkalori, Totallemak, Totalprotein);
	}

	console.log(typeof DataKeranjang);

	let [warna, setwarna] = useState(true);
	function warna1() {
		if (warna) {
			return "#1B7FD6";
		} else {
			return "#E42C36";
		}
	}

	const data = (karbohidrat, protein, lemak) => ({
		labels: "test",
		datasets: [
			{
				label: "My First Dataset",
				data: [karbohidrat, protein, lemak],
				backgroundColor: ["#1B7FD6", warna1(), "#1B7FD6"],
				borderColor: ["#1B7FD6", warna1(), "#1B7FD6"],
				borderWidth: 1,
				borderRadius: {
					topLeft: 50,
					topRight: 50,
					bottomLeft: 50,
					bottomRight: 50,
				},
				borderSkipped: false,
				barThickness: 30,
			},
			{
				label: "My First Dataset",
				data: [100 - karbohidrat, 100 - protein, 100 - lemak],
				backgroundColor: ["transparent"],
				borderColor: ["transparent"],
				borderWidth: 1,
				borderRadius: {
					topLeft: 50,
					topRight: 50,
					bottomLeft: 50,
					bottomRight: 50,
				},
				borderSkipped: false,
				barThickness: 30,
			},
		],
	});
	const data2 = (kalori) => ({
		labels: "test",
		datasets: [
			{
				label: "My First Dataset",
				data: [kalori],
				backgroundColor: ["#1B7FD6"],
				borderColor: ["#1B7FD6"],
				borderWidth: 1,
				borderRadius: {
					topLeft: 50,
					topRight: 50,
					bottomLeft: 50,
					bottomRight: 50,
				},
				borderSkipped: false,
				barThickness: 30,
			},
		],
	});
	const data1 = () => ({
		labels: "test",
		datasets: [
			{
				data: [100, 100, 100],
				backgroundColor: ["#CCE6F5"],
				borderColor: ["#CCE6F5"],
				borderWidth: 1,
				borderRadius: {
					topLeft: 50,
					topRight: 50,
					bottomLeft: 50,
					bottomRight: 50,
				},
				borderSkipped: false,
				barThickness: 30,
			},
		],
	});
	function protein() {
		if (proteins < 100) {
			setProteins(proteins + 10);
		} else if (protein === 100) {
			setProteins(100);
		} else {
			setProteins(100);
			setwarna(false);
		}
	}

	return (
		<Layout>
			<div className="container mt-4">
				{!Loading ? (
					<div className="row">
						<div className="col-12 col-lg-6">
							<button onClick={() => protein()}>test</button>
							{DataKeranjang.map((data) => (
								<TrackingCard
									image={data.image}
									namamakanan={data.makanan}
									modals={false}
									id={data._id}
									protein={data.protein}
									karbohidrat={data.karbohidrat}
									lemak={data.lemak}
									kalori={data.kalori}
								></TrackingCard>
							))}
						</div>
						<div className="col-12 col-lg-6 d-flex flex-column py-5">
							{/* <Bar data={data(90, 80, 10)} options={config}></Bar>
					<div className="mt-5 mb-5"></div>
					<Bar data={data1()} options={config1}></Bar> */}
							<div className="custom-rows mx-auto">
								<Bar
									data={data(90, proteins, 10)}
									options={config}
									id="stacked1"
									style={{
										marginLeft: "6vw",
									}}
								></Bar>
								<Bar
									data={data1()}
									options={config1}
									id="stacked"
									style={{
										marginLeft: "6vw",
									}}
								></Bar>
								<div
									className=" d-flex justify-content-evenly "
									style={{ width: "90%", marginLeft: "1vw" }}
								>
									<p>protein</p>
									<p>lemak</p>
									<p>karbohidrat</p>
								</div>
								<div className="custom-rows mx-auto"></div>
							</div>
						</div>
					</div>
				) : (
					console.log("false")
				)}
			</div>
		</Layout>
	);
}
