import "../style/card-makanan.css";

export default function CardMakanan({
	makanan,
	image,
	penyetaraanPorsi,
	kalori,
	karbon,
}) {
	return (
		<div className="card rounded-08">
			<img className="card-makanan-img" src={image} alt="Food" />
			<div className="card-body text-center card-height">
				<h5 className="card-title">{makanan}</h5>
				<p className="card-text mb-2">
					<small>{penyetaraanPorsi}</small>
				</p>
				<ul className="list-inline d-flex flex-wrap justify-content-around mb-1">
					<li className="list-inline-item text-danger fw-bold">
						<small>{kalori} Kkal</small>
					</li>
					<li className="list-inline-item text-info fw-bold">
						<small>
							{karbon} Kg/CO<sup>2</sup>
						</small>
					</li>
				</ul>
			</div>
		</div>
	);
}
