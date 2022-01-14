import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCookie } from "../helpers";
import Layout from "../layouting/Layout";
import { getAkun } from "../redux/actions/action.akun";
import "../style/profile.css";
import NotFound from "./NotFound";
import AkunGoogle from "./AkunGoogle";
import { Link } from "react-router-dom";

export default function Akun() {
  const token = getCookie("token");
  const dispatch = useDispatch();
  const akunState = useSelector((state) => state.akunReducers);
  const { akun, loading, error } = akunState;

  useEffect(() => {
    dispatch(getAkun());
  }, [dispatch]);

  if (!token || error) {
    return <NotFound notfound={false} />;
  }
  
  return (
    <Layout>
      {!loading ? (
        akun.email ? (
          <AkunGoogle email={akun.email}></AkunGoogle>
        ) : (
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/profile">
                  <i class="fas fa-chevron-left"></i>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <h5> Akun</h5>
                  </ul>
                </div>
              </div>
            </nav>
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
