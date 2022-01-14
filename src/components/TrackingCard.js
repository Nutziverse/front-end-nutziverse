import React, { useEffect } from "react";
import "../style/TrackingCard.css";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../redux/actions/action.modal";
import MakananModal from "../components/MakananModal";
import { TambahPorsi, KurangiPorsi } from "../redux/actions/actionPorsiMakanan";
import { removeMakanan, addMakanan } from "../helpers";

export default function TrackingCard({
	image,
	namamakanan,
	infoporsi,
	kuantitas,
	modals = true,
	porsirekomendasi,
	id,
}) {
	const dispatch = useDispatch();
	useEffect(() => {}, [dispatch]);
	return (
		<div>
			{modals ? (
				<button
					className="card mt-3 shadow-sm p-3 text-decoration-none text-black w-100"
					style={{ borderRadius: "20px" }}
					onClick={() => dispatch(showModal(id))}
				>
					<MakananModal></MakananModal>
					<div className="row w-100">
						<div className="col-3 col-md-3 ">
							<img
								src={image}
								style={{
									width: "100%",
									height: "100px",
									objectFit: "cover",
									borderRadius: "5px",
								}}
								alt={namamakanan}
							/>
						</div>
						<div className="col-9 col-md-9">
							<div className="d-flex justify-content-between">
								<div className="d-flex flex-column">
									<h5 className="text-start fw-bold">{namamakanan}</h5>
									<h6 className="text-start fw-light">{infoporsi}</h6>
								</div>
								<div className="">
									<h4 className="fw-bold">{porsirekomendasi + " x"}</h4>
								</div>
							</div>
						</div>
					</div>
				</button>
			) : (
				<div
					className={`${
						kuantitas ? "d-block" : "d-none"
					} + "card mt-3 shadow-sm p-3 w-100"`}
					style={{ borderRadius: "20px" }}
				>
					<div className="row w-100">
						<div className="col-3 col-md-3 ">
							<img
								src={image}
								style={{
									width: "100%",
									height: "100px",
									objectFit: "cover",
									borderRadius: "5px",
								}}
								alt={namamakanan}
							/>
						</div>
						<div className="col-9 col-md-9 d-flex justify-content-between">
							<div className="d-flex flex-column">
								<div className="">
									<h5 className="fw-semi-bold">{namamakanan}</h5>
									<h6 className="">{infoporsi}</h6>
								</div>
							</div>
							<div>
								<div className="d-flex ">
									<button
										className="btn me-2 my-auto"
										onClick={() => dispatch(TambahPorsi(id))}
									>
										<h5 class="fas fa-plus fw-light my-auto"></h5>
									</button>
									<h3 className="my-auto">{kuantitas}</h3>
									<button
										className="btn ms-2 my-auto"
										onClick={() => dispatch(KurangiPorsi(id))}
									>
										<h5 class="fas fa-minus fw-light my -auto"></h5>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
