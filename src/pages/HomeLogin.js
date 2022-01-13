import React, { useRef, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Layout from "../layouting/Layout";
import { Doughnut } from "react-chartjs-2";
import "../style/PieChart.css";
import { Link } from "react-router-dom";

import { getMakanan } from "../redux/actions/action.makanan";
import { useDispatch, useSelector } from "react-redux";
import { getUSER } from "../redux/actions/action.User";
import CardResep from "../components/CardResep";
import "../style/card-makanan.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const plugins = [
	{
		beforeDraw: function (chart) {
			let width = chart.width,
				height = chart.height,
				ctx = chart.ctx;
			ctx.restore();
			let fontSize = (height / 160).toFixed(2);
			ctx.font = fontSize + "em sans-serif";
			ctx.textBaseline = "top";
			let text = "80%",
				textX = Math.round((width - ctx.measureText(text).width) / 2),
				textY = height / 2;
			ctx.fillText(text, textX, textY);
			ctx.save();
		},
	},
];
let width, height, gradient, gradient2;
const colors = [];
function getGradient(ctx, chartArea, lengthdata) {
	const chartWidth = chartArea.right - chartArea.left;
	const chartHeight = chartArea.bottom - chartArea.top;

	if (!gradient || width !== chartWidth || height !== chartHeight) {
		width = chartWidth;
		height = chartHeight;
		gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
		gradient2 = ctx.createLinearGradient(0, 0, 100, 400);

		for (let i = 0; i < lengthdata; i++) {
			if (i == 0) {
			} else {
				gradient2.addColorStop(0, "transparent");
				gradient2.addColorStop(1, "transparent");
				colors.push(gradient);
			}
		}
		console.log(colors);
		gradient.addColorStop(0, "#4FBAF0");
		gradient.addColorStop(0.5, "#4FBAF0");
		gradient.addColorStop(1, "#0084CD");
	}
	return [gradient, gradient2];
}
console.log(colors);
export const data = {
	labels: ["kalori anda"],
	datasets: [
		{
			label: "# of Votes",
			data: [80, 20],
			backgroundColor: function (context) {
				const chart = context.chart;
				let { ctx, chartArea } = chart;

				if (!chartArea) {
					chartArea = {
						bottom: 281.4815013660502,
						height: 281.4815013660502,
						left: 0,
						right: 281.4815013660502,
						top: 0,
						width: 281.4815013660502,
					};
				}
				let lengthdata = data.datasets[0].data.length;
				return getGradient(ctx, chartArea, lengthdata);
			},

			borderColor: ["#1AA7EC", "transparent"],
			borderWidth: 1,
			borderRadius: [100, 100],
		},
	],
};

export const data1 = {
	labels: ["kalori anda"],
	datasets: [
		{
			label: "# of Votes",
			data: [30],
			backgroundColor: ["#d9d9d9"],
			borderColor: ["white"],
			borderWidth: 1,
			borderRadius: [100],
		},
	],
};

export const options1 = {
	rotation: 225,
	animation: {
		duration: 0,
	},
	circumference: 270,
	plugins: {
		legend: {
			display: false,
		},
	},
	cutout: "85%",
	responsive: true,
	maintainAspectRatio: true,
};

export const options = {
	rotation: 225,
	plugins: {
		legend: {
			display: false,
		},
	},
	circumference: 270,
	tooltip: {
		enabled: false,
	},
	cutout: "85%",
	responsive: true,
	maintainAspectRatio: true,
};

export default function HomeLogin() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUSER());
		dispatch(getMakanan());
	}, [dispatch]);
	const allMakananState = useSelector((state) => state.allmakananReducer);
	const { allMakanan, loading, error } = allMakananState;
	console.log(allMakanan);
	const UserState = useSelector((state) => state.UserReducer);
	const { User } = UserState;

	const PorsiState = useSelector((state) => state.PorsiReducer);
	const StatsProfile = ({ grid, colors, image, nutrisi, angka }) => (
		<div
			className={grid + " shadow d-flex flex-column"}
			style={{ borderRadius: "5px" }}
		>
			<div
				className="p-3 mx-auto my-3"
				style={{ borderRadius: "50%", backgroundColor: colors }}
			>
				<img src={image} height={"40px"} className="ms-auto me-auto" />
			</div>

			<h6 className="text-center">{nutrisi}</h6>
			<h6 className="fw-bold text-center mt-2 mb-4">{angka}</h6>
		</div>
	);
	return (
		<Layout>
			<div className="container">
				<div
					className="mt-4 rounded d-flex justify-content-between main-bg"
					style={{
						height: "250px",
					}}
				>
					<div>
						<h1 className="text-white fw-bold mt-4 ms-3">Halo, {User.nama}</h1>
						<h4 className="text-white mt-3 ms-3">Apa kabar?</h4>
					</div>
					<img
						src="https://i.ibb.co/xzBt8gh/Mesa-de-trabajo-1-EAT-3.png"
						alt="Icon"
						className="img-fluid d-none d-md-block"
					/>
				</div>
				<h4 className="mt-4">Penghitung Nutrisi</h4>
				<div className="container ">
					<div className="d-flex justify-content-betweeen row">
						<div className="col-12 col-lg-6">
							<div
								className="row h-100 shadow p-4 "
								style={{ borderRadius: "5px" }}
							>
								<div className="col-6 col-md-5 col-lg-8">
									<div className="div1">
										<Doughnut
											data={data}
											options={options}
											plugins={plugins}
											id="stacked1"
										/>
										<Doughnut data={data1} options={options1} id="stacked" />
									</div>
								</div>
								<div className="col-6 col-md-7 col-lg-4 d-flex justify-content-evenly justify-content-lg-end mmt-0 mt-md-4 ">
									<div>
										<h5 className="text-danger">Dibutuhkan</h5>
										<h5>2000 Kkal</h5>
										<h5 className="text-primary mt-5">Terpenuhi</h5>
										<h5>1900 Kkal</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="d-none d-lg-block col-lg-6">
							<div className="custom-row h-100">
								<StatsProfile
									grid={"item-1"}
									angka={200}
									colors={"#FFECB3"}
									image={
										"https://cdn-icons-png.flaticon.com/128/575/575435.png"
									}
									nutrisi={"Karbohidrat"}
								></StatsProfile>
								<StatsProfile
									grid={"item-2"}
									angka={200}
									colors={"#8CD2F5"}
									image={
										"https://cdn-icons-png.flaticon.com/128/1046/1046825.png"
									}
									nutrisi={"Protein"}
								></StatsProfile>
								<StatsProfile
									grid={"item-3"}
									angka={200}
									colors={"#F89D89"}
									image={
										"https://cdn-icons-png.flaticon.com/128/2553/2553591.png"
									}
									nutrisi={"Lemak"}
								></StatsProfile>
								<StatsProfile
									grid={"item-4"}
									angka={200}
									colors={"#E1E1E1"}
									image={
										"https://cdn-icons-png.flaticon.com/128/1890/1890036.png"
									}
									nutrisi={"Karbondioksida"}
								></StatsProfile>
							</div>
						</div>
					</div>
				</div>
				<div className=" mt-4">
					<h4>Resep</h4>
					<div className="row">
						{allMakanan.slice(0, 4).map((data) => (
							<div className="col-12 col-md-6 col-lg-3">
								<div className="pointer">
									<CardResep
										imageUrl={data.image}
										kalori={data.kaloriMakanan}
										karbon={data.karbon}
										title={data.makanan}
										key={data._id}
									></CardResep>
								</div>
							</div>
						))}
					</div>
					<div className="d-flex justify-content-end mt-3">
						<a href="/#" className="text-decoration-none">
							Lihat Semua
						</a>
					</div>
				</div>

				<div className="mt-4 mb-5">
					<h4>Rekomendasi Makanan</h4>
					<div className="custom-row-2">
						<Link
							to="/rekomendasi#sarapan"
							className="newitem-1 text-black text-decoration-none shadow p-4 d-flex flex-column"
						>
							<img
								src="https://cdn-icons-png.flaticon.com/128/3068/3068777.png"
								height={"70px"}
								className="ms-auto me-auto"
							/>
							<h6 className="text-center mt-3">Sarapan</h6>
						</Link>
						<Link
							to="/rekomendasi#makansiang"
							className="newitem-2 text-black text-decoration-none shadow p-4 d-flex flex-column"
						>
							<img
								src="https://cdn-icons-png.flaticon.com/128/2718/2718265.png"
								height={"70px"}
								className="ms-auto me-auto"
							/>
							<h6 className="text-center mt-3">Makan Siang</h6>
						</Link>
						<Link
							to="/rekomendasi#makanmalam"
							className="newitem-3 text-black text-decoration-none shadow p-4 d-flex flex-column"
						>
							<img
								src="https://cdn-icons-png.flaticon.com/128/4336/4336872.png"
								height={"70px"}
								className="ms-auto me-auto"
							/>
							<h6 className="text-center mt-3">Makan Malam</h6>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}
