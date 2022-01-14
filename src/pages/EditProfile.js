import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import "../style/profile.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../helpers";
import Layout from "../layouting/Layout";

export default function EditProfile() {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [alert]);
  const token = getCookie("token");
  const { register, handleSubmit } = useForm();

  const { REACT_APP_API_URL } = process.env;
  let Navigate = useNavigate();

  const onSubmit = async (entitas) => {
    let { nama_lengkap, umur, jeniskelamin, berat, tinggi, aktivitasFisik } = entitas;

    const body = {
      nama: nama_lengkap,
      umur: umur,
      jeniskelamin: jeniskelamin,
      beratBadan: berat,
      tinggiBadan: tinggi,
      aktivitasFisik: aktivitasFisik,
    };

    const auth = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = await axios.patch(`${REACT_APP_API_URL}/editprofile`, body, auth);
    if (data.message === "success") {
      Navigate("/profile");
    } else {
      setAlert(true);
    }

    console.log(data);
  };
  return (
    <Layout>
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
        {/* Alert */}
        <div className={`alert alert-danger align-items-center mt-4 ${alert ? "show" : "d-none"}`} role="alert">
          <div>Profil gagal diubah, silahkan cek kembali !</div>
        </div>
        <img src="https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png" class="rounded mx-auto d-block mx-5 my-5" height="100px" alt="women"></img>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Nama
            </label>
            <input
              type="text"
              className="form-control"
              id="Nama Lengkap"
              placeholder="Nama Anda"
              {...register("nama_lengkap", {
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
              {...register("umur", {
                required: "Umur tidak boleh kosong",
              })}
            />
            <div className="mb-3 mt-3">
              <label for="jeniskelamin">Jenis Kelamin</label>
              <select
                className="form-control "
                id="jeniskelamin"
                placeholder="Jenis Kelamin"
                {...register("jeniskelamin", {
                  required: "Jenis Kelamin tidak boleh kosong",
                })}
              >
                <i className="fas fa-caret-down"></i>
                <option defaultValue>Pilih Jenis Kelamin</option>
                <option value={"laki-laki"}>Laki-Laki</option>
                <option value={"perempuan"}>Perempuan</option>
              </select>
            </div>

            <div className="mb-3 mt-3">
              <label for="formGroupExampleInput" className="form-label">
                Berat Badan (kg)
              </label>
              <input
                type="number"
                className="form-control"
                id="Berat Badan"
                placeholder="masukan angka saja"
                {...register("berat", {
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
                {...register("tinggi", {
                  required: "Tinggi badan tidak boleh kosong",
                })}
              />
            </div>

            <div className="mb-3">
              <label for="aktivitasfisik" className="form-label">
                Aktivitas Fisik
              </label>
              <select
                className="form-control "
                id="aktivitasFisik"
                {...register("aktivitasFisik", {
                  required: "Aktivitas Fisik tidak boleh kosong",
                })}
                aria-label="Default select example"
              >
                <option defaultValue>Pilih Aktivitas</option>
                <option value="1.2">Jarang Berolahraga</option>
                <option value="1.3">Kadang-kadang Berolahraga</option>
                <option value="1.4">Sering Berolahraga</option>
              </select>
            </div>
          </div>
          <Button type="submit" btnclass="btn btn-primary mt-4 mb-5 float-end">
            Simpan
          </Button>
        </form>
      </div>
    </Layout>
  );
}
