import React from "react";
import logo_nutziverse from "../images/logo_nutziverse.png";
import "../style/header.css";

export default function Header() {
  return (
    <div className="header-box mt-3">
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
  );
}
