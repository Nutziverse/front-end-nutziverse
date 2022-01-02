import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
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
      icon: "https://cdn-icons.flaticon.com/png/512/561/premium/561611.png?token=exp=1641134841~hmac=87b3846e52b2575657e0c89cb8e673a1",
      title: "Pilih Makanan",
      desc: "Pilih makanan dan hitung kalori makanan yang anda konsumsi"
    },
    {
      icon: "https://cdn-icons.flaticon.com/png/512/4614/premium/4614332.png?token=exp=1641135121~hmac=141eb176dfd235529ec337fb372da60e",
      title: "Diet",
      desc: "Temukan rekomendasi diet sehat dan aktivitas pendukung diet anda"
    }
  ]
  return(
    <>
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
                <Link to="/sign-up"><button className="btn btn-danger text-white mt-3 rounded-08 py-2 px-3">Daftar Sekarang</button></Link>
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
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <img src={feature.icon} alt="ingredients" className="img-fluid w-75" />
                        </div>
                        <div className="col-9">
                          <h5 className="fw-bold mb-3">{feature.title}</h5>
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
    </>
  )
}