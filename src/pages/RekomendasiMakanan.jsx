import React, { useEffect } from "react";
import TrackingCard from "../components/TrackingCard";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getMakanan } from "../redux/actions/action.makanan.all";

export default function RekomendasiMakanan() {
	const makananState = useSelector((state) => state.makananallReducers);
	const { makanan } = makananState;
	useEffect(() => {
		dispatch(getMakanan());
	}, []);

	const dispatch = useDispatch();

	const Statsrekom = ({ colors, angka, satuan, nama }) => (
		<div style={{ position: "relative" }}>
			<div className="border border-primary rounded shadow-sm p-2">
				<h5 className="fw-bold text-center">{angka}</h5>
				<h6 className="fw-light text-center">{satuan}</h6>
			</div>
			<h5 className="text-center">{nama}</h5>
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
		</div>
	);
	return (
		<div>
			<div className="container mt-4 mb-4">
				<h3 className="fw-bold">Rekomendasi Makanan</h3>
				<div className="sarapan">
					<h4 className="mt-5">Sarapan</h4>
					<h5 className="fw-light">
						Rekomendasi beberapa menu sarapan untuk anda
					</h5>
					<div className="rounded border border-danger p-4">
						<div className="row ">
							{makanan.map((makan) => {
								return (
									<div className="col-12 col-lg-6">
										<TrackingCard
											image={makan.image}
											infoporsi={makan.porsi + "=" + makan.penyetaraanPorsi}
											modals={true}
											namamakanan={makan.makanan}
											id={makan._id}
										></TrackingCard>
									</div>
								);
							})}
							<a className="text-end text-decoration-none mt-3">Lihat Resep</a>
							<div>
								<h4 className="text-center">Total</h4>
								<div
									className="d-flex justify-content-evenly ms-auto me-auto mt-3"
									style={{ width: "100%" }}
								>
									<Statsrekom
										colors={"red"}
										nama={"Protein"}
										angka={390}
										satuan={"gr"}
									></Statsrekom>
									<Statsrekom
										colors={"red"}
										nama={"Protein"}
										angka={390}
										satuan={"gr"}
									></Statsrekom>
									<Statsrekom
										colors={"red"}
										nama={"Protein"}
										angka={390}
										satuan={"gr"}
									></Statsrekom>
									<Statsrekom
										colors={"red"}
										nama={"Protein"}
										angka={390}
										satuan={"gr"}
									></Statsrekom>
									<Statsrekom
										colors={"red"}
										nama={"Protein"}
										angka={390}
										satuan={"gr"}
									></Statsrekom>
								</div>
							</div>

							<div className="d-flex">
								<Button btnclass="btn ms-auto me-auto btn-danger text-white mt-3 rounded-08 py-2 px-4">
									Pilih
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
