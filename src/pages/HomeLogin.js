import React, { useRef, useEffect, useState } from "react";
//
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	ChartArea,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import "../style/PieChart.css";

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
			let text = "90%",
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
			data: [70, 0],
			// backgroundColor: colors
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
	return (
		<div>
			<div className="container">
				<div
					className="mt-3 rounded d-flex justify-content-end main-bg"
					style={{ height: "200px", backgroundColor: "#1AA7EC" }}
				>
					<img
						src="https://i.ibb.co/xzBt8gh/Mesa-de-trabajo-1-EAT-3.png"
						alt="Icon"
						className="img-fluid ms-a"
					/>
				</div>
				<div className="container mt-4">
					<h4>Penghitung Nutrisi</h4>
					<div className="row g-5">
						<div className="col-12 col-lg-6">
							<div
								className="row shadow-sm p-4 h-100"
								style={{ borderRadius: "20px" }}
							>
								<div className="col-6 ">
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
								<div className="col-6 d-flex justify-content-end">
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
								<div className="item-1 rounded shadow-sm d-flex flex-column">
									<div
										className="p-3 ms-auto me-auto mb-2"
										style={{ borderRadius: "50%", backgroundColor: "red" }}
									>
										<img
											src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
											height={"70px"}
											className="ms-auto me-auto"
										/>
									</div>

									<h5 className="text-center">Karbohidrat</h5>
									<h6 className="fw-bold text-center mt-4 mb-4">200</h6>
								</div>
								<div className="item-2 rounded shadow-sm d-flex flex-column">
									<div
										className="p-3 ms-auto me-auto mb-2"
										style={{ borderRadius: "50%", backgroundColor: "yellow" }}
									>
										<img
											src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
											height={"70px"}
											className="ms-auto me-auto"
										/>
									</div>
									<h5 className="text-center">Karbohidrat</h5>
									<h6 className="fw-bold text-center mt-4 mb-4">200</h6>
								</div>
								<div className="item-3 rounded shadow-sm d-flex flex-column">
									<div
										className="p-3 ms-auto me-auto mb-2"
										style={{ borderRadius: "50%", backgroundColor: "green" }}
									>
										<img
											src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
											height={"70px"}
											className="ms-auto me-auto"
										/>
									</div>

									<h5 className="text-center">Karbohidrat</h5>
									<h6 className="fw-bold text-center mt-4 mb-4">200</h6>
								</div>
								<div className="item-4 rounded shadow-sm d-flex flex-column">
									<div
										className="p-3 ms-auto me-auto mb-2"
										style={{ borderRadius: "50%", backgroundColor: "blue" }}
									>
										<img
											src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
											height={"70px"}
											className="ms-auto me-auto"
										/>
									</div>

									<h5 className="text-center">Karbohidrat</h5>
									<h6 className="fw-bold text-center mt-4 mb-4">200</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-4 mb-5">
					<h4>Rekomendasi Makanan</h4>
					<div className="custom-row-2">
						<div className="newitem-1 shadow p-4">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
								height={"70px"}
								className="ms-auto me-auto"
							/>
							<h3>Sarapan</h3>
						</div>
						<div className="newitem-2 shadow p-4">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
								height={"70px"}
								className="ms-auto me-auto"
							/>
							<h3>Makan Siang</h3>
						</div>
						<div className="newitem-3 shadow p-4">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
								height={"70px"}
								className="ms-auto me-auto"
							/>
							<h3>Makan Malam</h3>
						</div>
						<div className="newitem-4 shadow p-4">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3067/3067788.png"
								height={"70px"}
								className="ms-auto me-auto"
							/>
							<h3>Camilan</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
