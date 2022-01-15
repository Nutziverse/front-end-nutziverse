/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import TrackingCard from "../components/TrackingCard";
import { useDispatch, useSelector } from "react-redux";
import { getMakanan } from "../redux/actions/action.makanan";
import { getRekomendasi } from "../redux/actions/action.rekomendasi";
import Layout from "../layouting/Layout";
import { Link } from "react-router-dom";
import MakananModal from "../components/MakananModal";

export default function RekomendasiMakanan() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMakanan());
		dispatch(getRekomendasi());
	}, []);
	const RekomendasiState = useSelector((state) => state.rekomendasiReducer);
	const { allRekomendasi } = RekomendasiState;
	const makananState = useSelector((state) => state.allmakananReducer);

	const { Loading } = makananState;
	let rekomendasisarapan = allRekomendasi.filter(
		(data) => data.jenisrekomendasi === "Sarapan"
	);
	let rekomendasisiang = allRekomendasi.filter(
		(data) => data.jenisrekomendasi === "Makan Siang"
	);

	let rekomendasimalam = allRekomendasi.filter(
		(data) => data.jenisrekomendasi === "Makan Malam"
	);
	function getnutrisi(jenis) {
		let karbohidratsarapan = jenis.reduce(
			(prev, curr) => prev + curr.nutrisi.karbohidrat,
			0
		);
		let lemaksarapan = jenis.reduce(
			(prev, curr) => prev + curr.nutrisi.lemak,
			0
		);
		let proteinsarapan = jenis.reduce(
			(prev, curr) => prev + curr.nutrisi.protein,
			0
		);
		let kalorisarapan = jenis.reduce(
			(prev, curr) => prev + curr.nutrisi.kalori,
			0
		);
		let karbonsarapan = jenis.reduce(
			(prev, curr) => prev + curr.nutrisi.karbon,
			0
		);
		let porsisarapan = jenis.map((data) =>
			data.menu.map((jumlah) => jumlah.jumlah)
		);
		let idsarapan = rekomendasisarapan.map((data) =>
			data.menu.map((id) => id.idmakanan._id)
		);
		return [
			karbohidratsarapan,
			lemaksarapan,
			proteinsarapan,
			kalorisarapan,
			karbonsarapan,
			porsisarapan,
			idsarapan,
		];
	}

	let sarapan = getnutrisi(rekomendasisarapan);
	let siang = getnutrisi(rekomendasisiang);
	let malam = getnutrisi(rekomendasimalam);

	function setlocal(id, porsi) {
		id = id[0];
		porsi = porsi[0];
		for (let i = 0; i < id.length; i++) {
			let items = localStorage.getItem("pilih_makanan") || [];

			let data = {
				makananID: id[i],
				porsi: porsi[i],
			};
			if (items.length > 0) {
				let newData = JSON.parse(items);
				let index = newData.findIndex((el) => el.makananID === id[i]);
				if (index > -1) {
					newData[index].porsi += porsi[i];
				} else {
					newData.push(data);
				}
				localStorage.setItem("pilih_makanan", JSON.stringify(newData));
			} else {
				localStorage.setItem("pilih_makanan", JSON.stringify([data]));
			}
			data = {};
		}
	}

	const Statsrekom = ({ colors, angka, satuan, nama }) => (
		<div className="position-relative">
			<div
				className="border border-primary rounded shadow-sm p-2"
				style={{ width: "80px" }}
			>
				<h5 className="fw-bold text-center">{angka}</h5>
				<h6 className="fw-light text-center">{satuan}</h6>
			</div>

			<div
				style={{
					width: "20px",
					height: "20px",
					backgroundColor: colors,
					position: "absolute",
					borderRadius: "50%",
					top: "-8px",
					left: "-8px",
				}}
			></div>
			<div className="d-flex justify-content-center">
				<h6 className="text-center">{nama}</h6>
			</div>
		</div>
	);
	return (
		<Layout>
			{!Loading ? (
				<div className="container mt-4 mb-4">
					<h3 className="fw-bold">Rekomendasi Makanan</h3>
					<div id="sarapan">
						<h4 className="mt-5">Sarapan</h4>
						<h5 className="fw-light">
							Rekomendasi beberapa menu sarapan untuk anda
						</h5>
						<div className="rounded border border-danger p-4">
							<div className="row ">
								{rekomendasisarapan.map((data) =>
									data.menu.map((id) => {
										return (
											<div className="col-12 col-lg-6">
												<TrackingCard
													id={id.idmakanan._id}
													namamakanan={id.idmakanan.makanan}
													image={id.idmakanan.image}
													porsirekomendasi={id.jumlah}
												></TrackingCard>
											</div>
										);
									})
								)}
								<Link
									to="/resep"
									className="text-end text-decoration-none mt-3"
								>
									Lihat Resep
								</Link>
								<div>
									<h4 className="text-center">Total</h4>
									<div className="d-flex justify-content-evenly mx-auto mt-3">
										{}
										<Statsrekom
											colors={"red"}
											nama={"Kalori"}
											angka={sarapan[3]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"yellow"}
											nama={"Karbohidrat"}
											angka={sarapan[0]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Protein"}
											angka={sarapan[2]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Lemak"}
											angka={sarapan[1]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Karbon"}
											angka={sarapan[4]}
											satuan={"gr"}
										></Statsrekom>
									</div>
								</div>

								<div className="d-flex">
									<Link
										onClick={() => setlocal(sarapan[6], sarapan[5])}
										className="btn mx-auto btn-danger text-white mt-3 rounded-08 py-2 px-4"
										to="/pilih-makanan/detail"
									>
										Pilih
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div id="makansiang">
						<h4 className="mt-5">Sarapan</h4>
						<h5 className="fw-light">
							Rekomendasi beberapa menu sarapan untuk anda
						</h5>
						<div className="rounded border border-danger p-4">
							<div className="row ">
								{rekomendasisiang.map((data) =>
									data.menu.map((id) => {
										return (
											<div className="col-12 col-lg-6">
												<TrackingCard
													id={id.idmakanan._id}
													namamakanan={id.idmakanan.makanan}
													image={id.idmakanan.image}
													porsirekomendasi={id.jumlah}
												></TrackingCard>
											</div>
										);
									})
								)}
								<Link
									to="/resep"
									className="text-end text-decoration-none mt-3"
								>
									Lihat Resep
								</Link>
								<div>
									<h4 className="text-center">Total</h4>
									<div className="d-flex justify-content-evenly mx-auto mt-3">
										{}
										<Statsrekom
											colors={"red"}
											nama={"Kalori"}
											angka={siang[3]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"yellow"}
											nama={"Karbohidrat"}
											angka={siang[0]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Protein"}
											angka={siang[2]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Lemak"}
											angka={siang[1]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Karbon"}
											angka={siang[4]}
											satuan={"gr"}
										></Statsrekom>
									</div>
								</div>

								<div className="d-flex">
									<button
										onClick={() => setlocal(siang[6], siang[5])}
										className="btn mx-auto btn-danger text-white mt-3 rounded-08 py-2 px-4"
									>
										Pilih
									</button>
								</div>
							</div>
						</div>
					</div>
					<div id="makanmalam">
						<h4 className="mt-5">Sarapan</h4>
						<h5 className="fw-light">
							Rekomendasi beberapa menu sarapan untuk anda
						</h5>
						<div className="rounded border border-danger p-4">
							<div className="row ">
								{rekomendasimalam.map((data) =>
									data.menu.map((id) => {
										return (
											<div className="col-12 col-lg-6">
												<TrackingCard
													id={id.idmakanan._id}
													namamakanan={id.idmakanan.makanan}
													image={id.idmakanan.image}
													porsirekomendasi={id.jumlah}
												></TrackingCard>
											</div>
										);
									})
								)}
								<Link
									to="/resep"
									className="text-end text-decoration-none mt-3"
								>
									Lihat Resep
								</Link>
								<div>
									<h4 className="text-center">Total</h4>
									<div className="d-flex justify-content-evenly mx-auto mt-3">
										{}
										<Statsrekom
											colors={"red"}
											nama={"Kalori"}
											angka={malam[3]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"yellow"}
											nama={"Karbohidrat"}
											angka={malam[0]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Protein"}
											angka={malam[2]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Lemak"}
											angka={malam[1]}
											satuan={"gr"}
										></Statsrekom>
										<Statsrekom
											colors={"red"}
											nama={"Karbon"}
											angka={malam[4]}
											satuan={"gr"}
										></Statsrekom>
									</div>
								</div>

								<div className="d-flex">
									<button
										onClick={() => setlocal(malam[6], malam[5])}
										className="btn mx-auto btn-danger text-white mt-3 rounded-08 py-2 px-4"
									>
										Pilih
									</button>
								</div>
							</div>
						</div>
					</div>
					<MakananModal></MakananModal>
				</div>
			) : null}
		</Layout>
	);
}
