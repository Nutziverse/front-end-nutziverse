import React from "react";
import { Link } from "react-router-dom";
import logo_nutziverse from "../images/logo_nutziverse.png";
import "../style/header.css";

export default function Header() {
  return (
    <>
    <div className="header-box mt-3 d-none d-sm-block">
      <div className="d-flex justify-content-between me-2 ms-2">
        <div>
          <img className="me-auto mb-3" src={logo_nutziverse} className="mt-auto mb-auto" height="50px" alt="Logo"></img>
        </div>
        <div>
        <ul className="nav d-flex justify-content-between" style={{ width: "600px" }}>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Pilih Makanan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dampak Karbon
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Diet
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img className="me-auto mb-3" src={logo_nutziverse} className="mt-auto mb-auto" height="50px" alt="Logo"></img>
        </div>
        
        {/* <img src="https://logos-world.net/wp-content/uploads/2020/03/Danone-logo.png" class="w3-round" alt="Logo"></img>
        <img src="https://blud.co.id/wp/wp-content/uploads/2018/02/logo-kemenkes.png" class="w3-round" alt="Logo"></img> */}
        
          
      </div>
    </div>

    <nav className="fixed-bottom nav-mobile d-block d-sm-none">
      <div className="container">
        <div className="row justify-content-between align-items-center text-center">
          <div className="col-3">
            <Link to="/" className="mobile-active"><h3 className="m-0"><i class="far fa-home"></i></h3></Link>
          </div>
          <div className="col-3">
            <Link to="/pilih-makanan"><h3 className="m-0"><i class="far fa-utensils"></i></h3></Link>
          </div>
          <div className="col-3">
            <Link to="/karbon"><h3 className="m-0"><i class="far fa-cloud-meatball"></i></h3></Link>
          </div>
          <div className="col-3">
            <Link to="/diet"><h3 className="m-0"><i class="far fa-weight"></i></h3></Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
