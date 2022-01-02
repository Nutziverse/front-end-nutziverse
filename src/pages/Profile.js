import React from "react";
import "../style/profile.css";

export default function Profile() {
  //   const nama = [];
  //   const umur = [];
  //   const jenisKelamin = [];
  //   const noHP = [];
  //   const email = [];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" class="w3-round" height="100px" width="100px" alt="Avatar"></img>
        </div>
        <div className="about col">
          <h3>Vania</h3>
          <i class="fa-thin fa-cake-candles">25 Tahun</i>
          <i class="fa-light fa-mars-and-venus">Perempuan</i>
          <i class="fa-thin fa-phone">0893847827889</i>
          <i class="fa-thin fa-envelope">vania@gmail.com</i>
        </div>
        <div className="col">
          <i class="fa-light fa-weight-scale">
            <p>Berat Badan</p>
            <p>65 kg</p>
          </i>
        </div>
        <div className="col">
          <i class="fa-light fa-ruler-vertical">
            <p>Tinggi Badan</p>
            <p>165 cm</p>
          </i>
        </div>
      </div>
      <div className="box-user">
        <i class="fa-solid fa-user"></i>
      </div>
      <div className="box-user">
        <i class="fa-light fa-pen-to-square"></i>
      </div>
      <div className="box-user">
        <i class="fa-light fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  );
}
