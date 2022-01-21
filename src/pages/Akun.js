import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCookie } from "../helpers";
import Layout from "../layouting/Layout";
import { getAkun } from "../redux/actions/action.akun";
import "../style/profile.css";
import AkunGoogle from "./AkunGoogle";
import { Link, useNavigate } from "react-router-dom";

export default function Akun() {
	const token = getCookie("token");
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	const akunState = useSelector((state) => state.akunReducers);
	const { akun, loading } = akunState;

	useEffect(() => {
		dispatch(getAkun());
	}, [dispatch]);

	if (!token) {
		Navigate("/unauthorized");
	}

	return (
		<Layout>
			{!loading && akun ? (
				akun.email ? (
					<AkunGoogle email={akun.email}></AkunGoogle>
				) : (
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
						<div className="container">
							<img
								src="https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png"
								class="rounded mx-auto d-block mx-5 my-5"
								height="100px"
								alt="women"
							></img>
							<div className="mb-3">
								<label for="formGroupExampleInput" className="form-label">
									No. Telepon
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput"
									placeholder="081296942794"
								/>
							</div>
							<div className="mb-3">
								<label for="formGroupExampleInput2" className="form-label">
									Kata Sandi
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput2"
									placeholder="******"
								/>
								<div className="mb-3 mt-3">
									<label for="formGroupExampleInput" className="form-label">
										Konfirmasi Kata Sandi
									</label>
									<input
										type="text"
										className="form-control"
										id="formGroupExampleInput"
										placeholder="******"
									/>
								</div>
							</div>
						</div>
					</div>
				)
			) : null}
		</Layout>
	);
}
