import React, { useState } from "react";
import Button from "../components/Button";
import "../style/profile.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const {
    editprofil,
    handleSubmit,
    formState: { errors },
  } = useForm;

  let Navigate = useNavigate();

  const onSubmit = async (data) => {
    let nama = data.nama;
    let umur = umur;
    let jeniskelamin = jeniskelamin;
    let berat = berat;
    let tinggi = tinggi;
    let aktivitasFisik = aktivitasFisik;

    const body = {
      nama: data.nama,
      umur: data.umur,
      jeniskelamin: data.jeniskelamin,
      beratBadan: data.beratBadan,
      tinggiBadan: data.tinggiBadan,
      aktivitasFisik: data.aktivitasFisik,
    };
  };
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

      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Nama
        </label>
        <input
          type="text"
          className="form-control"
          id="Nama Lengkap"
          placeholder="Nama Anda"
          {...editprofil("nama_lengkap", {
            required: "Nama lengkap tidak boleh kosong",
          })}
        />
      </div>
      <div className="mb-3">
        <label for="umur" className="form-label">
          Umur
        </label>
        <input
          type="number"
          className="form-control"
          id="umur"
          placeholder="dalam tahun"
          {...editprofil("umur", {
            required: "Umur tidak boleh kosong",
          })}
        />
        <div className="mb-3 mt-3">
          <label for="formGroupExampleInput" className="form-label">
            Berat Badan (kg)
          </label>
          <input
            type="number"
            className="form-control"
            id="Berat Badan"
            placeholder="masukan angka saja"
            {...editprofil("berat", {
              required: "Berat badan tidak boleh kosong",
            })}
          />
        </div>

        <div className="mb-3">
          <label for="tinggibadan" className="form-label">
            Tinggi Badan (cm)
          </label>
          <input
            type="number"
            className="form-control"
            id="Tinggi Badan"
            placeholder="masukan angka saja"
            {...editprofil("tinggi", {
              required: "Tinggi badan tidak boleh kosong",
            })}
          />
        </div>

        <div className="mb-3">
          <label for="aktivitasfisik" className="form-label">
            Aktivitas Fisik
          </label>
          <select
            className="form-control"
            id="aktivitasFisik"
            {...editprofil("aktivitasFisik", {
              required: "Aktivitas Fisik tidak boleh kosong",
            })}
            aria-label="Default select example"
          >
            <option selected>Pilih Aktivitas</option>
            <option value="1.2">Jarang Berolahraga</option>
            <option value="1.3">Kadang-kadang Berolahraga</option>
            <option value="1.4">Sering Berolahraga</option>
          </select>
        </div>
      </div>
      <Button btnclass="btn btn-primary mt-4 mb-5 float-end">Simpan</Button>
    </div>
  );
}
