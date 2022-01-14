
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
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
                  <div className="col-9">
                    <div className="row">
                      <div className="col-12">
                        <h2>{User.nama}</h2>
                        <p className="text-muted fw-semi-bold"><span className="me-3">{User.umur}tahun</span> <span>{User.jeniskelamin}</span></p>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col">
                            <div className="card border-0 shadow-sm">
                              <div className="card-body">
                                <h6>{User.berat}kg</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card border-0 shadow-sm">
                              <div className="card-body">
                                <h6>{User.tinggi}kg</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card border-0 shadow-sm">
                              <div className="card-body">
                                <h6>{User.aktivitasFisik.keterangan}</h6>
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
    </Layout>
  )
}