import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../layouting/Layout";
import "../style/card-makanan.css"

export default function HomeGuest() {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2884/2884645.png",
      title: "Rekomendasi Makanan",
      desc: "Temukan rekomendasi makanan sesuai dengan kebutuhan kalori anda"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/6503/6503107.png",
      title: "Dampak Karbon",
      desc: "Informasi dampak karbon dan cara mengurangi efeknya bagi bumi"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2934/2934108.png",
      title: "Pilih Makanan",
      desc: "Pilih makanan dan hitung kalori makanan yang anda konsumsi"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2738/2738658.png",
      title: "Tracking Nutrisi",
      desc: "Rekam nutrisi yang sudah anda konsumsi setiap hari"
    }
  ]
  return(
    <Layout>
      <main className="main-section">
        {/* <img src="" alt="Food" /> */}
        <div className="main-section-content container-fluid container-md text-white py-5">
          <div className="row justify-content-lg-between justify-content-center align-items-center py-md-5">
            <div className="col-lg-6 col-12">
              <h1>Nutziverse</h1>
              <p>Nutrisi and  Gizi for our Universe</p>

              <p className="fs-3 mt-4">Kami berdedikasi untuk membantu para ibu dalam memenuhi kebutuhan gizi dan juga memelihara bumi</p>

              <div className="mt-11">
                <h5>Daftar sekarang untuk menikmati fitur-fitur ekslusif kami </h5>
                <Link to="/sign-up"><Button btnclass="btn btn-danger text-white mt-3 rounded-08 py-2 px-3">Daftar Sekarang</Button></Link>
                <Link to="/sign-up"><Button btnclass="btn btn-light text-danger mt-3 rounded-08 py-2 px-3 ms-3 d-lg-none">Masuk</Button></Link>
              </div>

            </div>

            <div className="col-lg-3 d-none d-lg-block text-end">
              <img src="https://i.ibb.co/xzBt8gh/Mesa-de-trabajo-1-EAT-3.png" alt="Icon" className="img-fluid" />
            </div>
          </div>
        </div>
      </main>

      <section className="container py-5">
        <h2 className="text-center mb-5">Fitur Kami</h2>
        <div className="row justify-content-center gy-4 gy-lg-5 gx-lg-5">
          {
            features.map(feature => {
              return (
                <div className="col-md-8 col-lg-5 col-12">
                  <div className="card rounded-08 shadow border-0 p-2">
                    <div className="card-body">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-md-3 col-4 text-center mb-4 mb-md-0">
                          <img src={feature.icon} alt="ingredients" className="img-fluid w-75" />
                        </div>
                        <div className="col-md-9 col-12 text-center text-md-start">
                          <h5 className="fw-bold mb-2">{feature.title}</h5>
                          <p className="mb-0">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </Layout>
  )
}