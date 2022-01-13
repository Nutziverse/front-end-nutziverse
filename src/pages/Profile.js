
import { Navigate } from "react-router-dom";
import { getCookie } from "../helpers";
import Layout from "../layouting/Layout";
import "../style/card-makanan.css"

export default function Profile() {
  const token = getCookie("token")
  if(!token) {
    return <Navigate to="/" />
  }

  return(
    <Layout>
      <section className="container py-5">
        <div className="card border-0 shadow-sm">
          <div class="card-body">
            <div className="row">
              <div className="col-2">
                <h1 className="mb-0 text-primary profile-icon">
                  <i className="far fa-user-circle"></i>
                </h1>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-12">
                    <h2>Vania</h2>
                    <p className="text-muted fw-semi-bold"><span className="me-3">25tahun</span> <span>Perempuan</span></p>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col">
                        <div className="card border-0 shadow-sm">
                          <div className="card-body">
                            <h6>65kg</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card border-0 shadow-sm">
                          <div className="card-body">
                            <h6>65kg</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card border-0 shadow-sm">
                          <div className="card-body">
                            <h6>65kg</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}