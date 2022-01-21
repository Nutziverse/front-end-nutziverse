import React from "react";
import "../style/akun.css";
import google from "../images/google.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function AkunGoogle({ email }) {
	return (
		<div className="container-fluid">
			<div className="container">
				<Link
					className="text-decoration-none text-black py-3 d-flex"
					to="/profile"
				>
					<i class="fas fa-chevron-left text-decoration-none my-auto me-2"></i>
					<h5 className="text-decoration-none my-auto fw-bold"> Akun</h5>
				</Link>
			</div>

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
					<p className="text fw-bold text-center mt-2">{email}</p>
				</div>
				<div className="col-12 text-center mt-3">
					<Button
						type="submit"
						btnclass="btn btn-sm disabled btn-main fw-bold google-btn shadow px-5"
					>
						<img
							src={google}
							style={{ height: "25px", marginRight: "10px" }}
							alt=""
						></img>
						Anda Masuk dengan Google
					</Button>
				</div>
			</div>
		</div>
	);
}
