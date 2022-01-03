
import React from "react";
import "../style/TrackingCard.css"

export default function TrackingCard({image, alt_image, makanan, infoporsi, kuantitas, kal, fat, karb, prot} ) {
	return (
		<div className="container">
			<div className="card mt-3">
				<div className="row g-0">
					<div className="col-2 ">
						<img src={image} className="p-3 tracking-image" height={"100px"} width={"100px"} alt={alt_image} />
					</div>
					<div className="col-10 ">
						<div className="card-body">
							<div className="d-flex">
								<h5 className="card-title fw-bold">{makanan}</h5>
								<h5 className="card-title ms-5 fw-bold">x {kuantitas}</h5>
							</div>
							<p className="card-text mt-3">
								{infoporsi}
							</p>
							<div className="d-flex justify-content-between mt-5">
								<p className="card-text tracking-text">Kal : {kal}</p>
								<p className="card-text tracking-text">Fat : {fat}</p>
								<p className="card-text tracking-text">Karb : {karb}</p>
								<p className="card-text tracking-text">Prot : {prot}</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
