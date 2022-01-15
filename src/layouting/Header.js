import React from "react";
import Button from "../components/Button";
import { getCookie } from "../helpers";
import logo_nutziverse from "../images/logo_nutziverse.png";
import "../style/header.css";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";

export default function Header() {
	let location = useLocation();

	function WebLink({ children, to, ...props }) {
		let resolved = useResolvedPath(to);
		let match = useMatch({ path: resolved.pathname, end: true });
		return (
			<div>
				<Link
					className={"nav-link " + (match ? "active" : "")}
					to={to}
					{...props}
				>
					{children}
				</Link>
				{match && ""}
			</div>
		);
	}
	function MobileLink({ children, to, ...props }) {
		let resolved = useResolvedPath(to);
		let match = useMatch({ path: resolved.pathname, end: true });
		return (
			<div>
				<Link
					className={" " + (match ? "mobile-active" : "")}
					to={to}
					{...props}
				>
					{children}
				</Link>
				{match && ""}
			</div>
		);
	}
	const isLogin = getCookie("token");
	return (
		<>
			<div className="py-3 px-2 d-none d-lg-block shadow">
				<div className="d-flex justify-content-between align-items-center me-2 ms-2">
					<Link to="/">
						<img
							className="me-auto mb-3 mt-auto mb-auto"
							src={logo_nutziverse}
							height="40px"
							alt="Logo"
						></img>
					</Link>
					<div>
						<ul
							className="nav d-flex justify-content-between"
							style={{ width: "600px" }}
						>
							<li className="nav-item">
								<WebLink aria-current="page" to="/">
									Beranda
								</WebLink>
							</li>
							<li className="nav-item">
								{location.pathname.includes("/pilih-makanan/detail") ? (
									<Link to="/pilih-makanan" className="nav-link active">
										Pilih Makanan
									</Link>
								) : (
									<WebLink to="/pilih-makanan">Pilih Makanan</WebLink>
								)}
							</li>
							<li className="nav-item">
								<WebLink to="/karbon">Dampak Karbon</WebLink>
							</li>
						</ul>
					</div>
					<div>
						{isLogin ? (
							<Link to="/profile">
								<h1 className="mb-0 text-primary">
									<i className="far fa-user-circle"></i>
								</h1>
							</Link>
						) : (
							<Link to="/sign-in">
								<Button btnclass="btn btn-primary">Masuk</Button>
							</Link>
						)}
					</div>

					{/* <img src="https://logos-world.net/wp-content/uploads/2020/03/Danone-logo.png" class="w3-round" alt="Logo"></img>
        <img src="https://blud.co.id/wp/wp-content/uploads/2018/02/logo-kemenkes.png" class="w3-round" alt="Logo"></img> */}
				</div>
			</div>

			<nav className="fixed-bottom nav-mobile d-block d-lg-none">
				<div className="container">
					<div className="row justify-content-between align-items-center text-center">
						<div className="col-3">
							<MobileLink to="/">
								<h3 className="m-0">
									<i className="far fa-home"></i>
								</h3>
							</MobileLink>
						</div>
						<div className="col-3">
							<MobileLink to="/pilih-makanan">
								<h3 className="m-0">
									<i className="far fa-utensils"></i>
								</h3>
							</MobileLink>
						</div>
						<div className="col-3">
							<MobileLink to="/karbon">
								<h3 className="m-0">
									<i className="far fa-cloud-meatball"></i>
								</h3>
							</MobileLink>
						</div>
						<div className="col-3">
							<MobileLink to="/profile">
								<h3 className="m-0">
									<i className="far fa-user-circle"></i>
								</h3>
							</MobileLink>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
