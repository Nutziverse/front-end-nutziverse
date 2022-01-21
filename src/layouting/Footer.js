import "../style/footer.css";
import logo_nutziverse from "../images/footer_nutzyverse.png";

export default function Footer() {
	return (
		<div class="mt-5 box">
			<div className="container">
				<div class="row mt-4">
					<div class="col-12 col-md-4 mb-4 mb-lg-0">
						<div>
							<img
								className="me-auto mb-3"
								src={logo_nutziverse}
								height="50px"
								alt="Logo"
							></img>
							<p>Nutrisi and Gizi for our universe</p>
							<p>Jl. Jenderal Sudirman, Senayan, Jakarta 10270</p>
						</div>
					</div>
					<div class="col-12 col-md-4 mt-2 mb-4 mb-lg-0">
						<div className="d-flex ">
							<div className="ms-md-auto me-md-auto">
								<p>Tentang Kami</p>
								<p>Kebijakan Privasi</p>
								<p>Hubungi Kami</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4 mt-2 text-md-center">
						<p>Challenge Partner Kami</p>
						<div className="d-flex flex-column align-items-md-center">
							<img
								src="https://user-images.githubusercontent.com/61933958/150524480-9cb1d9e4-faf7-45de-a5bd-135d97344267.png"
								alt="Logo"
								className="img-fluid w-50"
							></img>
						</div>
					</div>
				</div>
				<div class="copyright mb-5 mb-lg-0">
					<div class="row mb-4 mt-5 text-center">
						<div class="col-12 mb-5 mb-lg-0">
							Copyright © Group2 - Danone #Tech4Impact 2021 | All Right Reserved
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
