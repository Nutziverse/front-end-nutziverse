import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMakananByID } from "../redux/actions/action.makanan";
import { closeModal } from "../redux/actions/action.modal";
import { TambahPorsi } from "../redux/actions/actionPorsiMakanan";
import "../style/card-makanan.css";
import { getCookie } from "../helpers";
import LoadingComponent from "./Loading";

export default function MakananModal({ pilih = false, karbon = false }) {
	let token = getCookie("token");
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	const makananState = useSelector((state) => state.makananReducers);
	const modalState = useSelector((state) => state.modalReducer);
	const { makanan, loading } = makananState;

	let showModal = "d-block";

	useEffect(() => {
		dispatch(getMakananByID(modalState.MID));
	}, [dispatch, modalState.MID]);

	if (!modalState.show) return null;
	function handleClick(makanan) {
		Navigate("/pilih-makanan/detail");
		dispatch(TambahPorsi(makanan));
	}

	return (
		<div
			className={`modal bg-black bg-opacity-50 ${showModal}`}
			tabindex="-1"
			onClick={() => dispatch(closeModal())}
		>
			<div
				className="modal-dialog modal-dialog-scrollable modal-lg"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Detail Makanan</h5>
						<button
							type="button"
							className="btn-close"
							aria-label="Close"
							onClick={() => dispatch(closeModal())}
						></button>
					</div>
					{loading ? <LoadingComponent customstyle=""/> : (
						<div className="modal-body text-center text-lg-start px-sm-4">
							<div className="row gy-4 align-items-center">
								<div className="col-12 col-lg-5">
									<img
										src={makanan.image}
										alt={makanan.makanan}
										className="img-fluid max-h-10rem"
									/>
									<h5 className="text-center fw-bold text-primary mt-3">
										{makanan.makanan}
									</h5>
								</div>

								<div className="col-12 col-lg-7">
									<div
										className={`row text-center gy-2 ${karbon ? "d-none" : ""}`}
									>
										<p className="mb-2">
											<small>
												{makanan.porsi} {makanan.makanan} atau setara dengan{" "}
												{makanan.penyetaraanPorsi}, mengandung
											</small>
										</p>

										<div className="col-6 col-sm-3">
											<p className="mb-1">
												<small>Kalori</small>
											</p>
											<h5 className="text-danger fw-bold">
												{makanan.kaloriMakanan}{" "}
												<small className="text-muted fs-6 fw-normal">
													kkal
												</small>
											</h5>
										</div>

										<div className="col-6 col-sm-3">
											<p className="mb-1">
												<small>Karbohidrat</small>
											</p>
											<h5 className="text-karbo fw-bold">
												{makanan.karbohidrat}
												<small className="text-muted fs-6 fw-normal">g</small>
											</h5>
										</div>

										<div className="col-6 col-sm-3">
											<p className="mb-1">
												<small>Protein</small>
											</p>
											<h5 className="text-success fw-bold">
												{makanan.karbohidrat}
												<small className="text-muted fs-6 fw-normal">g</small>
											</h5>
										</div>

										<div className="col-6 col-sm-3">
											<p className="mb-1">
												<small>Lemak</small>
											</p>
											<h5 className="text-warning fw-bold">
												{makanan.karbohidrat}
												<small className="text-muted fs-6 fw-normal">g</small>
											</h5>
										</div>

                    <p className="mt-4 mb-1">
                      <small>dan menghasilkan emisi karbon sebesar</small>
                    </p>
                    <h5 className="fw-bold">
                      {makanan.karbon}{" "}
                      <small className="text-muted fs-6 fw-normal">
                        kg CO<sub>2</sub>
                      </small>
                    </h5>
                  </div>

									<div className={`row ${karbon ? "" : "d-none"}`}>
										<div className="col-12 text-center">
											<h6>Tahukah kamu?</h6>
											<p>
												<small>
													{makanan.porsi} {makanan.makanan} atau setara dengan{" "}
													{makanan.penyetaraanPorsi}, menghasilkan emisi karbon
													sebesar
												</small>
											</p>
											<h5 className="fw-bold">
												{makanan.karbon}{" "}
												<small className="text-muted fs-6 fw-normal">
													kg CO<sub>2</sub>
												</small>
											</h5>
											<p>
												<small>
													yang setara dengan kamu berkendara sepeda motor selama{" "}
													<span className="fw-bold">9 menit</span>
												</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
					<div className={`modal-footer ${pilih ? "" : "d-none"}`}>
						<button
							className="btn btn-primary"
							disabled={loading}
							onClick={() => {
								dispatch(closeModal());
								!token ? Navigate("/unauthorized") : handleClick(makanan._id);
							}}
						>
							Pilih
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
