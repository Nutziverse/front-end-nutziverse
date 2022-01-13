import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { getCookie } from "../helpers";
import logo_nutziverse from "../images/logo_nutziverse.png";
import "../style/header.css";

export default function Header() {
  const isLogin = getCookie("token")
  return (
    <>
      <div className="py-3 px-2 d-none d-lg-block shadow">
        <div className="d-flex justify-content-between align-items-center me-2 ms-2">
          <Link to="/">
            <img className="me-auto mb-3 mt-auto mb-auto" src={logo_nutziverse} height="40px" alt="Logo"></img>
          </Link>
          <div>
            <ul className="nav d-flex justify-content-between" style={{ width: "600px" }}>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/pilih-makanan">
                  Pilih Makanan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/karbon">
                  Dampak Karbon
                </Link>
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
              <Link to="/" className="mobile-active">
                <h3 className="m-0">
                  <i className="far fa-home"></i>
                </h3>
              </Link>
            </div>
            <div className="col-3">
              <Link to="/pilih-makanan">
                <h3 className="m-0">
                  <i className="far fa-utensils"></i>
                </h3>
              </Link>
            </div>
            <div className="col-3">
              <Link to="/karbon">
                <h3 className="m-0">
                  <i className="far fa-cloud-meatball"></i>
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
