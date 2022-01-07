import React from "react";
import TrackingCard from "../components/TrackingCard";
import Button from "../components/Button";

export default function RekomendasiMakanan() {
	const data = [
		{
			image:
				"https://cdn.idntimes.com/content-images/community/2021/01/fromandroid-4df0ed11b58c2dae0a623432f32a3919.jpg",
			alt_image: "bubur ayam",
			makanan: "Bubur Ayam",
			infoporsi: "1 porsi = 100 gram",
			kuantitas: "1",
			kal: "12",
			fat: "12",
			karb: "12",
			prot: "12",
		},
		{
			image:
				"https://cdn.idntimes.com/content-images/community/2021/01/fromandroid-4df0ed11b58c2dae0a623432f32a3919.jpg",
			alt_image: "bubur ayam",
			makanan: "Bubur Ayam",
			infoporsi: "1 porsi = 100 gram",
			kuantitas: "1",
			kal: "12",
			fat: "12",
			karb: "12",
			prot: "12",
		},
	];
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
						<div className="row">
							{data.map((data) => {
								return (
									<div className="col-12 col-lg-6">
										<TrackingCard
											image={data.image}
											alt_image={data.alt_image}
											infoporsi={data.infoporsi}
											fat={data.fat}
											kal={data.kal}
											karb={data.karb}
											kuantitas={data.kuantitas}
											makanan={data.makanan}
											prot={data.prot}
										></TrackingCard>
									</div>
								);
							})}
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
