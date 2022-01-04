import React from "react";
import Button from "../components/Button";
import "../style/profile.css";

export default function Profile() {
  //   const nama = [];
  //   const umur = [];
  //   const jenisKelamin = [];
  //   const noHP = [];
  //   const email = [];

  return (
    <div className="container d-block">
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="">
              <i className="fas fa-chevron-left me-5 px-2 py-2">
                <span> Edit Profil</span>
              </i>
            </div>
          </a>
        </div>
      </nav>
      <img src="https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png" class="rounded mx-auto d-block mx-5 my-5" height="100px" alt="women"></img>
      <span>
        <i className="far fa-edit"></i>
      </span>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Nama
        </label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nama Anda" />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Tanggal Lahir
        </label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="dd-mm-yyy" />
        <div className="mb-3 mt-3">
          <label for="formGroupExampleInput" className="form-label">
            Berat Badan (kg)
          </label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="masukan angka saja" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            Tinggi Badan (cm)
          </label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="masukan angka saja" />
        </div>

        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            Aktivitas Fisik
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Pilih Aktivitas</option>
            <option value="1">Rendah</option>
            <option value="2">Sedang</option>
            <option value="3">Tinggi</option>
          </select>
        </div>
      </div>
      <Button btnclass="btn btn-primary mt-4 mb-5 float-end">Simpan</Button>
    </div>
  );
}
