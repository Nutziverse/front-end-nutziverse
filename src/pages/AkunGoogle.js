import React from "react";
import "../style/akun.css";
import google from "../images/google.png";
import { Link } from "react-router-dom";
export default function AkunGoogle() {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/profile">
						<i class="fas fa-chevron-left"></i>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<h5> Akun</h5>
						</ul>
					</div>
				</div>
			</nav>
			<div className="row">
				<div className="col-12">
					<img
						src="https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png"
						class="rounded mx-auto d-block mx-5 my-5"
						height="100px"
						alt="women"
					></img>
				</div>
				<div className="col-12">
					<p className="text fw-bold text-center mt-2">nutziverse@gmail.com</p>
				</div>
				<div className="col-12 text-center mt-3">
					<button
						type="submit"
						className="btn btn-sm btn-main fw-bold"
						style={{
							backgroundColor: "white",
							fontSize: "18px",
							boxShadow:
								"0 8px 16px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.19)",
							borderRadius: "10px",
							padding: "15px 18px;",
							height: "50px",
							width: "500px",
						}}
					>
						<img
							src={google}
							style={{ height: "25px", marginRight: "10px" }}
							alt="google"
						></img>
						Anda Masuk dengan Google
					</button>
				</div>
			</div>
		</div>
	);
}
