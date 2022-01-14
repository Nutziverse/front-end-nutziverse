import TrackingCard from "../components/TrackingCard";
import React, { useEffect, useState, useRef } from "react";
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
import { Post_data_to_history } from "../redux/actions/actions.tohistory";

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
		layout: {
			padding: {
				left: 30,
				bottom: 30,
			},
		},
		indexAxis: "x",
		plugins: {
			legend: {
				display: false,
			},
		},
		responsive: true,
		scales: {
			y: {
				display: false,
				stacked: true,
			},
			x: {
				display: true,
				grid: {
					drawBorder: false,
					display: false,
				},
				stacked: true,
				ticks: {
					display: true,
				},
			},
		},
	};
	const config1 = {
		indexAxis: "x",
		layout: {
			padding: {
				left: 30,
				bottom: 30,
			},
		},
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

		scales: {
			y: {
				display: false,
				stacked: true,
			},
			x: {
				display: true,
				grid: {
					drawBorder: false,
					display: false,
				},
				stacked: true,
				ticks: {
					display: true,
				},
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
	const configkalori = {
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
	let local = localStorage.getItem("pilih_makanan");
	local = JSON.parse(local);
	let id = [];
	local.map((data) => id.push(data.makananID));

	const dispatch = useDispatch();

	const KeranjangState = useSelector((state) => state.keranjangReducer);
	const PorsiState = useSelector((state) => state.PorsiReducer);
	const History = useSelector((state) => state.ToHistory);
	console.log(History);
	function Findporsi(ID) {
		let porsi = PorsiState.filter((data) => data.makananID == ID);
		if (porsi.length > 0) {
			porsi = porsi[0].porsi;
			return porsi;
		} else {
			return false;
		}
	}
	let jumlah = PorsiState.map((data) => data.porsi);
	let { keranjang } = KeranjangState;
	let DataKeranjang = keranjang.data;
	let Loading = KeranjangState.loading;
	const [proteins, setProteins] = useState(0);
	let Totalprotein,
		Totallemak,
		Totalkarbohidrat,
		Totalkarbon,
		Totalkalori = [];

	let ar = [1, 2];
	function getData() {
		if (DataKeranjang.length !== jumlah.length) {
			let distance = DataKeranjang.length - jumlah.length;
			for (let i = 0; i < distance; i++) {
				jumlah.push(0);
			}
		}

		Totalprotein = DataKeranjang.map((data) => data.protein);
		Totallemak = DataKeranjang.map((data) => data.lemak);
		Totalkarbohidrat = DataKeranjang.map((data) => data.karbohidrat);
		Totalkalori = DataKeranjang.map((data) => data.kaloriMakanan);
		Totalkarbon = DataKeranjang.map((data) => data.karbon);

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
		Totalkarbon = Totalkarbon.reduce(function (r, a, i) {
			return r + a * jumlah[i];
		}, 0);
		Totalkarbohidrat = Totalkarbohidrat.toFixed(2);
		Totallemak = Totallemak.toFixed(2);
		Totalprotein = Totalprotein.toFixed(2);
		Totalkalori = Totalkalori.toFixed(2);
		Totalkarbon = Totalkarbon.toFixed(2);
		console.log(Totalkarbon);
	}

	const data = (karbohidrat, protein, lemak) => ({
		labels: [
			`Karbohidrat ${Totalkarbohidrat} gr`,
			`Protein ${Totalprotein} gr`,
			`Lemak ${Totallemak} gr`,
		],
		datasets: [
			{
				label: "Dipenuhi",
				data: [karbohidrat, protein, lemak],
				backgroundColor: ["#1B7FD6", "#1B7FD6"],
				borderColor: ["#1B7FD6", "#1B7FD6"],
				borderWidth: 1,
				borderRadius: {
					topLeft: 50,
					topRight: 50,
					bottomLeft: 50,
					bottomRight: 50,
				},
				borderSkipped: false,
				barThickness: 30,
				barPercentage: 0.9,
				categoryPercentage: 1,
			},
			{
				label: "belum terpenuhi",
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
				barPercentage: 0.9,
				categoryPercentage: 1,
			},
		],
	});
	const dataKalori = (Kalori) => ({
		labels: ["Kalori"],
		datasets: [
			{
				label: "Dipenuhi",
				data: [Kalori],
				backgroundColor: ["##F9AC3A"],
				borderColor: ["#F9AC3A"],
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
				label: "belum terpenuhi",
				data: [100 - Kalori],
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
	const data1 = () => ({
		labels: [
			`Karbohidrat ${Totalkarbohidrat} gr`,
			`Protein ${Totalprotein} gr`,
			`Lemak ${Totallemak} gr`,
		],
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
	const dataKalori2 = () => ({
		labels: ["Kalori"],
		datasets: [
			{
				data: [100],
				backgroundColor: ["#F2F5CC"],
				borderColor: ["#F2F5CC"],
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
	let persenprotein,
		persenkalori,
		persenkarbohidrat,
		persenlemak = 0;
	function protein(protein, maxprotein) {
		persenprotein = (protein / maxprotein) * 100;
		if (persenprotein > 100) {
			persenprotein = 100;
		}
		return persenprotein;
	}
	function lemak(lemak, maxlemak) {
		persenlemak = (lemak / maxlemak) * 100;
		if (persenlemak > 100) {
			persenlemak = 100;
		}
		return persenlemak;
	}
	function karbohidrat(karbohidrat, maxkarbohidrat) {
		persenkarbohidrat = (karbohidrat / maxkarbohidrat) * 100;
		if (persenkarbohidrat > 100) {
			persenkarbohidrat = 100;
		}
		return persenkarbohidrat;
	}
	function kalori(kalori, maxkalori) {
		persenkalori = (kalori / maxkalori) * 100;
		if (persenkalori > 100) {
			persenkalori = 100;
		}
		return persenkalori;
	}

	let temp_kalori = 0;
	let postkalori = Totalkalori;
	let postkarbon = Totalkarbon;
	let postmakanan = PorsiState;

	if (!Loading) {
		getData();
		temp_kalori = kalori(Totalkalori, 500);
		postkalori = Totalkalori;
		postkarbon = Totalkarbon;
		postmakanan = PorsiState;
	}
	// let status = false;
	let [status, setstatus] = useState(false);
	useEffect(() => {
		dispatch(getKeranjang(id));
	}, [dispatch]);

	return (
		<Layout>
			<div className="container mt-4">
				{!Loading ? (
					<div className="row">
						<div className="col-12 col-lg-6">
							{DataKeranjang.map((data) => (
								<>
									<TrackingCard
										image={data.image}
										namamakanan={data.makanan}
										modals={false}
										id={data._id}
										protein={data.protein}
										karbohidrat={data.karbohidrat}
										lemak={data.lemak}
										kalori={data.kalori}
										kuantitas={Findporsi(data._id)}
									></TrackingCard>
								</>
							))}
						</div>
						<div className="col-12 col-lg-6 d-flex flex-column py-5">
							<div
								className="custom-row-keranjang "
								style={{ height: "40%", width: "100%" }}
							>
								<Bar
									data={data(
										karbohidrat(Totalkarbohidrat, 100),
										protein(Totalprotein, 100),
										lemak(Totalprotein, 100)
									)}
									options={config}
									id="items-1"
								></Bar>
								<Bar data={data1()} options={config1} id="items-2"></Bar>
							</div>
							<div
								className="custom-row-keranjang mx-auto "
								style={{ width: "70%", height: "30%" }}
							>
								<Bar
									data={dataKalori(kalori(Totalkalori, 500))}
									options={configkalori}
									id="items-1"
								></Bar>
								<Bar data={dataKalori2()} options={config2} id="items-2"></Bar>
							</div>
							<div className="d-flex justify-content-center mt-5">
								<button
									className="btn btn-danger"
									onClick={() =>
										dispatch(
											Post_data_to_history(postmakanan, postkalori, postkarbon)
										)
									}
								>
									Selesai
								</button>
							</div>

							{/* <div className="custom-rows">
								<Bar
									data={data(Totalkarbohidrat, Totalprotein, Totallemak)}
									options={config}
									id="stacked1"
								></Bar>
								<Bar data={data1()} options={config1} id="stacked"></Bar>
							</div> */}
						</div>
					</div>
				) : null}
			</div>
		</Layout>
	);
}
