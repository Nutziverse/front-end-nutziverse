import React from "react";
import "../style/TrackingCard.css";

export default function TrackingCard({
	image,
	alt_image,
	makanan,
	infoporsi,
	kuantitas,
	porsiuser = 1,
	modals = false,
}) {
	return (
		<div>
			{modals ? (
				<div
					className="card mt-3 shadow-sm p-3"
					style={{ borderRadius: "20px" }}
				>
					<div className="row gx-4">
						<div className="col-3 col-md-2 ">
							<img
								src={image}
								className="img-fluid rounded-lg"
								alt={alt_image}
							/>
						</div>
						<div className="col-9 col-md-10 d-flex justify-content-between">
							<div className="d-flex flex-column">
								<div className="">
									<h2 className="fw-bold">{makanan}</h2>
									<h5 className="">{infoporsi}</h5>
								</div>
							</div>
							<div>
								<h2 className="fw-bold">{kuantitas + " x"}</h2>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					className="card mt-3 shadow-sm p-3"
					style={{ borderRadius: "20px" }}
				>
					<div className="row gx-4">
						<div className="col-3 col-md-2 ">
							<img
								src={image}
								className="img-fluid rounded-lg"
								alt={alt_image}
							/>
						</div>
						<div className="col-9 col-md-10 d-flex justify-content-between">
							<div className="d-flex flex-column">
								<div className="">
									<h2 className="fw-bold">{makanan}</h2>
									<h5 className="">{infoporsi}</h5>
								</div>
							</div>
							<div>
								<div className="d-flex">
									<button className="btn me-2">
										<h5 class="fas fa-plus fw-light"></h5>
									</button>

									<h2>{porsiuser}</h2>
									<button className="btn me-2">
										<h5 class="fas fa-minus fw-light"></h5>
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
