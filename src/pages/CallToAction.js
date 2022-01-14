import React from "react";

export default function CallToAction() {
	return (
		<div className="container mt-4 d-flex flex-column">
			<h3 className="text-center">Serap Emisi karbon</h3>
			<img
				src="https://cdn-icons-png.flaticon.com/128/3721/3721625.png"
				className="img-fluid mx-auto"
			/>
			<h6 className="text-center mt-4">
				Ayo serap emisi yang sudah kamu timbulkan dengan <br />
				melakukan aktivitas berikut :
			</h6>
			<button
				className="mx-auto mt-3 p-3 btn border border-secondary"
				style={{ maxWidth: "400px" }}
			>
				<div className="d-flex">
					<img
						src="https://cdn-icons-png.flaticon.com/128/3227/3227839.png"
						style={{ height: "80px" }}
					/>
					<h5 className="ms-3 my-auto">Tanam 1 Batang Pohon</h5>
				</div>
			</button>
		</div>
	);
}
