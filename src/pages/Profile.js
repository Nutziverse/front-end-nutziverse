
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { getCookie } from "../helpers";
import Layout from "../layouting/Layout";
import { getUSER } from "../redux/actions/action.user";
import "../style/card-makanan.css"

export default function Profile() {
  let token = getCookie("token")
  const dispatch = useDispatch()
  const profile = useSelector(state => state.userReducer)
  const {User, loading, error} = profile

  useEffect(() => {
    dispatch(getUSER())
  }, [dispatch])

  if(!token || error) {
    return <Navigate to="/unauhorized" />
  }

  return(
    <Layout>
      <section className="container py-5">
        <div className="card border-0 shadow-sm">
          <div class="card-body">
            {
              !loading && !error ? (
                <div className="row">
                  <div className="col-2">
                    <h1 className="mb-0 text-primary profile-icon">
                      <i className="far fa-user-circle"></i>
                    </h1>
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-12 col-lg-4">
                        <div className="row">
                          <div className="col-12">
                            <h2>{User.nama}</h2>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-2">
                                <p className="text-muted"><i class="far fa-birthday-cake"></i></p>
                                <p className="text-muted"><i class="far fa-venus-mars"></i></p>
                              </div>
                              <div className="col-6 col-lg-10">
                                <p className="text-muted fw-semi-bold"> <span>{User.umur} tahun</span></p>
                                <p className="text-muted fw-semi-bold"> <span>{User.jeniskelamin}</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-8">
                        <div className="row text-center gy-4">
                          <div className="col-12 col-sm-4 col-lg-4">
                            <div className="card border-0 shadow-sm">
                              <div className="card-body">
                                <div className="row justify-content-center gy-2">
                                  <div className="col-3 col-sm-6 col-md-4 col-lg-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/822/822133.png" alt="Weight" className="img-fluid" />
                                  </div>
                                  <div className="col-12">
                                    <p className="text-muted mb-0">Berat badan</p>
                                  </div>
                                  <div className="col-12">
                                    <h6 className="text-primary">{User.berat}kg</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-lg-4">
                            <div className="card border-0 shadow-sm">
                              <div className="card-body">
                                <div className="row justify-content-center gy-2">
                                  <div className="col-3 col-sm-6 col-md-4 col-lg-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3209/3209114.png" alt="Height" className="img-fluid" />
                                  </div>
                                  <div className="col-12">
                                    <p className="text-muted mb-0">Tinggi badan</p>
                                  </div>
                                  <div className="col-12">
                                    <h6 className="text-primary">{User.tinggi}kg</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-lg-4">
                            <div className="card border-0 shadow-sm">
                              <div className="card-body">
                                <div className="row justify-content-center gy-2">
                                  <div className="col-3 col-sm-6 col-md-4 col-lg-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/4852/4852363.png" alt="activity" className="img-fluid" />
                                  </div>
                                  <div className="col-12">
                                    <p className="text-muted mb-0">Aktivitas fisik</p>
                                  </div>
                                  <div className="col-12">
                                    <h6 className="text-primary">{User.aktivitasFisik.keterangan}</h6>
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
              ) : (<h1>Data Profile tidak ada</h1>)
            }
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row gy-5 align-items-center">
          <Link className="col-12 text-decoration-none text-dark" to="/akun">
            <div className="row align-items-center">
              <div className="col-10">
                <h5 className="fw-bold"> <span className="bg-profile-icon py-2 px-3 rounded-08 text-white me-3"><i class="far fa-user"></i></span> Akun</h5>
              </div>
              <div className="col-2 text-end">
                <h5 className="mb-0"><i class="fas fa-chevron-right"></i></h5>
              </div>
            </div>
          </Link>
          <Link className="col-12 text-decoration-none text-dark" to="/profile/edit">
            <div className="row align-items-center">
              <div className="col-10">
                <h5 className="fw-bold"> <span className="bg-profile-icon py-2 px-3 rounded-08 text-white me-3"><i class="far fa-user-edit"></i></span> Edit Profil</h5>
              </div>
              <div className="col-2 text-end">
                <h5 className="mb-0"><i class="fas fa-chevron-right"></i></h5>
              </div>
            </div>
          </Link>
          <Link className="col-12 text-decoration-none text-dark" to="/logout">
            <div className="row align-items-center">
              <div className="col-10">
                <h5 className="fw-bold"> <span className="bg-profile-icon py-2 px-3 rounded-08 text-white me-3"><i class="far fa-sign-out-alt"></i></span> Keluar</h5>
              </div>
              <div className="col-2 text-end">
                <h5 className="mb-0"><i class="fas fa-chevron-right"></i></h5>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}