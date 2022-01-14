import { Link } from "react-router-dom"
import Layout from "../layouting/Layout"

export default function NotFound({notfound=true}) {
  return(
    <Layout>
      { notfound? (
        <section className="container pb-5 px-5">
          <div className="row ms-auto me-auto">
            <div className="col-12 col-sm-9 col-md-6 ms-auto me-auto">
              <img src="https://user-images.githubusercontent.com/61933958/142138061-1f764917-c60d-4d0d-b247-842b4e12e94d.png" alt="Not Found" className="img-fluid" />
            </div>        
            <div className="col-12">
              <h4 className="text-center">Ooops... Halaman yang anda tuju tidak tersedia.</h4>
              <p className="text-dark text-center mb-2 mt-3">Apakah anda yakin URL yang anda tuju sudah benar?</p>
              <p className="text-dark text-center mb-0">Mungkin halaman yang anda tuju sudah dihapus atau dipindahkan.</p>
              <Link to="/" className="d-flex text-decoration-none">
                  <button className="btn btn-sm btn-outline-main mt-4 ms-auto me-auto fs-6 text-muted"><i class="fas fa-long-arrow-alt-left"></i> Kembali ke Beranda</button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <Unauhorized></Unauhorized>
      )}
    </Layout>
  )
}

function Unauhorized() {
  return (
    <section className="container pb-5 px-5">
      <div className="row ms-auto me-auto">
        <div className="col-12 col-sm-9 col-md-7 col-lg-5 ms-auto me-auto py-5 text-center mt-3">
          <img src="https://user-images.githubusercontent.com/61933958/149270106-b5c1cfd8-7f40-420a-88d5-af3e0cf2655a.png" alt="Unauhorized" className="img-fluid" />
        </div>        
        <div className="col-12">
          <h4 className="text-center">Ooops... Kamu tidak dapat mengakses halaman ini</h4>
          <p className="text-dark text-center mb-2 mt-3">Silakan masuk terlebih dahulu</p>
          <Link to="/sign-in" className="d-flex text-decoration-none">
              <button className="btn btn-sm btn-outline-main mt-4 ms-auto me-auto fs-6 text-muted"><i class="fas fa-sign-in-alt"></i> Masuk</button>
          </Link>
          <Link to="/" className="d-flex text-decoration-none">
              <button className="btn btn-sm btn-outline-main mt-2 ms-auto me-auto fs-6 text-muted"><i class="fas fa-long-arrow-alt-left"></i> Kembali ke Beranda</button>
          </Link>
        </div>
      </div>
    </section>
  )
}