import React from "react";
import "../style/header.css";

export default function Header() {
  return (
    <div className="box">
      <div className="Logo">
        <img src="https://logos-world.net/wp-content/uploads/2020/03/Danone-logo.png" class="w3-round" alt="Logo"></img>
        <img src="https://blud.co.id/wp/wp-content/uploads/2018/02/logo-kemenkes.png" class="w3-round" alt="Logo"></img>
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="one nav-link active" aria-current="page" href="#">
                Beranda
              </a>
              <hr />
            </li>
            <li className="nav-item">
              <a className="two nav-link" href="#">
                Pilih Makanan
              </a>
            </li>
            <li className="nav-item">
              <a className="three nav-link" href="#">
                Dampak Karbon
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
