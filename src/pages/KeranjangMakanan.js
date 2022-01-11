import React from "react";
import TrackingCard from "../components/TrackingCard";

export default function KeranjangMakanan() {
	let local = localStorage.getItem("pilihmakanan");

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-6">
					<TrackingCard></TrackingCard>
				</div>
				<div className="col-12 col-lg-6"></div>
			</div>
		</div>
	);
}
