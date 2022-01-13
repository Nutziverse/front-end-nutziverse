import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import google from "../images/google.png";
import Layout from "../layouting/Layout";
import "../style/SignUp.css";
import axios from "axios";
import { getCookie, setCookie } from "../helpers";
import Button from "../components/Button";

export default function SignUp() {
  const {REACT_APP_API_URL} = process.env
  const google_cookie = getCookie("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  let Navigate = useNavigate()
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
  const onSubmit = async (data) => {
    let {nama_lengkap, no_hp, password, konfirmasi_password, berat, tinggi, umur, aktivitasFisik, jeniskelamin} = data
    if(konfirmasi_password !== password) {
      setError("konfirmasi_password", {
        message: "Password tidak sesuai"
      })
    }
    
    no_hp = no_hp.replace("+62", "0")

    if(google_cookie) {
      const body = {
        email: google_cookie,
        jeniskelamin: jeniskelamin,
        umur: umur,
        tinggi: tinggi,
        berat: berat,
        aktivitasFisik: aktivitasFisik
      }

      const {data} = await axios.patch(`${REACT_APP_API_URL}/users/register/google`, body)
      if(data.message === 'success') {
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setCookie("token", data.token)
        
        Navigate("/")
      }
    } else {
      const body = {
        nama: nama_lengkap,
        no_hp: no_hp,
        jeniskelamin: jeniskelamin,
        password:password,
        umur: umur,
        tinggi: tinggi,
        berat: berat,
        aktivitasFisik: aktivitasFisik,
      }
      
      const {data} = await axios.post(`${REACT_APP_API_URL}/users/register`, body)
      
      if(data.message === 'success') {
        setCookie("token", data.token)
        
        Navigate("/")
      } else {
        setAlert(true)
      }
    }
  }



  const responseGoogle = async (authResult) => {
    
    try {
      if (authResult) {
        const result = await axios.post(
          `${process.env.REACT_APP_API_URL}/users/auth/google`,
          authResult
        );
        
        
        const { message } = result.data;

        if (message === "welcome") {
          const { token } = result.data;
          setCookie("token", token);
          Navigate("/");
        } else {
          setCookie("email", result.data.result.email);
          Navigate("/sign-up");
        }

        return result;
      } else {
        throw new Error(authResult);
      }
    } catch (e) {
      
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h3 className="text-center fw-bold" style={{ color: "#302D2D" }}>
              Buat Akun
            </h3>
          </div>
        </div>

        {/* Alert */}
        <div className={`alert alert-danger align-items-center mt-4 ${alert ? "show" : "d-none"}`} role="alert">
          <div>No Telepon sudah terdaftar</div>
        </div>

        {/* Isi Content */}
        <form action="" method="post" id="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-4 justify-content-center">
            {google_cookie ? null : (
              <div className="col-12 col-lg-6 mt-4">
                <div className="form-group mb-4">
                  <label for="namalengkap" style={{ fontSize: "20px" }}>
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mt-2"
                    id="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    {...register("nama_lengkap", {
                      required: "Nama Lengkap tidak boleh kosong"
                    })}
                  ></input>
                  {errors.nama_lengkap && <small className="text-danger">{errors.nama_lengkap.message}</small>}
                </div>

                <div className="form-group mb-4">
                  <label for="nomortelepon" style={{ fontSize: "20px" }}>
                    No. Telepon
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mt-2"
                    id="nomortelepon"
                    placeholder="Nomor Telepon"
                    {...register("no_hp", {
                      required: "Nomor Telepon tidak boleh kosong",
                      pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
                        message: "Nomor Telepon tidak valid",
                      },
                    })}
                  ></input>
                  {errors.no_hp && <small className="text-danger">{errors.no_hp.message}</small>}
                </div>

                <div className="form-group mb-4">
                  <label for="katasandi" style={{ fontSize: "20px" }}>
                    Kata Sandi
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg mt-2"
                    id="katasandi"
                    placeholder="Kata Sandi"
                    {...register("password", {
                      required: "Password tidak boleh kosong",
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Min. 8 karakter, huruf dan angka",
                      },
                    })}
                  ></input>
                  {errors.password && <small className="text-danger">{errors.password.message}</small>}
                </div>

                <div className="form-group">
                  <label for="konfirmasikatasandi" style={{ fontSize: "20px" }}>
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control form-control-lg mt-2 ${errors.password && "invalid"}`}
                    id="konfirmasikatasandi"
                    placeholder="Konfirmasi Kata Sandi"
                    {...register("konfirmasi_password", {
                      required: "Konfirmasi Password tidak boleh kosong",
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Kata sandi tidak cocok",
                      },
                    })}
                  ></input>
                  {errors.konfirmasi_password && <small className="text-danger">{errors.konfirmasi_password.message}</small>}
                </div>
              </div>
            )}

            <div className="col-12 col-lg-6 mt-4">
              <div className="form-group mb-4">
                <label for="jeniskelamin" style={{ fontSize: "20px" }}>
                  Jenis Kelamin
                </label>
                <select
                  className="form-control form-control-lg mt-2"
                  id="jeniskelamin"
                  placeholder="Jenis Kelamin"
                  {...register("jeniskelamin", {
                    required: "Jenis Kelamin tidak boleh kosong"
                  })}
                >
                  <i className="fas fa-caret-down"></i>
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value={"laki-laki"}>Laki-Laki</option>
                  <option value={"perempuan"}>Perempuan</option>
                </select>
                {errors.jeniskelamin && <small className="text-danger">{errors.jeniskelamin.message}</small>}
              </div>

              <div className="form-group">
                <label for="umur" style={{ fontSize: "20px" }}>
                  Umur
                </label>
                <div className="input-group mt-2">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="umur"
                    maxLength={3}
                    min={0}
                    max={200}
                    placeholder="Umur"
                    {...register("umur", {
                      required: "Umur tidak boleh kosong"
                    })}
                    ></input>
                    <span className="input-group-text">tahun</span>
                </div>
                  {errors.umur && <small className="text-danger">{errors.umur.message}</small>}
              </div>

              <div className="row">
                <div className="col-6 mt-4">
                  <div className="form-group mb-4">
                    <label for="beratbadan" style={{ fontSize: "20px" }}>
                      Berat Badan
                    </label>
                    <div className="input-group mt-2">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="Berat Badan"
                        min={1}
                        placeholder="Berat Badan"
                        {...register("berat", {
                          required: "Berat tidak boleh kosong"
                        })}
                        ></input>
                        <span className="input-group-text">kg</span>
                    </div>
                      {errors.berat && <small className="text-danger">{errors.berat.message}</small>}
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div className="form-group mb-4">
                    <label for="tinggibadan" style={{ fontSize: "20px" }}>
                      Tinggi Badan
                    </label>
                    <div className="input-group mt-2">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="Tinggi Badan"
                        min={1}
                        max={500}
                        maxLength={3}
                        placeholder="Tinggi"
                        {...register("tinggi", {
                          required: "Tinggi badan tidak boleh kosong"
                        })}
                        ></input>
                        <span className="input-group-text">cm</span>
                    </div>
                      {errors.tinggi && <small className="text-danger">{errors.tinggi.message}</small>}
                  </div>
                </div>
              </div>

              <div className="form-group mb-4">
                <label for="aktivitasfisik" style={{ fontSize: "20px" }}>
                  Aktivitas Fisik
                </label>
                <select
                  className="form-control form-control-lg mt-2"
                  id="aktivitasfisik"
                  {...register("aktivitasFisik", {
                    required: "Aktivitas Fisik tidak boleh kosong"
                  })}
                >
                  <option value="1.2">Jarang Berolahraga</option>
                  <option value="1.3">Kadang-kadang Berolahraga</option>
                  <option value="1.4">Sering Berolahraga</option>
                </select>
              </div>
            </div>
          </div>

          {google_cookie ? null : (
            <div className="row">
              <div className="col-6 mt-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    onClick={() => togglePasswordVisiblity()}
                  ></input>
                  <label
                    className="form-check-label"
                    for="inlineCheckbox1"
                    style={{ color: "#999999" }}
                  >
                    Tampilkan Kata Sandi
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-5 mt-5 text-center">
              <div className="d-grid col-12">
                <Button
                  type="submit"
                  btnclass={"btn btn-sm btn-main text-center btn-daftar"}
                >
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        </form>

        {google_cookie ? null : (
          <>
            <div className="row">
              <div className="col-12 mt-4 text-center">
                <p className="" style={{ color: "#6E6E6E", fontSize: "20px" }}>
                  atau
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-9 col-lg-5 mt-3 text-center">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={(props) => (
                    <div className="d-grid col-12 mt-md-3 mt-2" onClick={props.onClick}>
                      <Button
                        type="submit"
                        btnclass={"btn btn-sm btn-main btn-google"}
                      >
                        <img
                          src={google}
                          style={{ height: "16px", marginRight: "10px" }}
                          alt=""
                        ></img>
                        Daftar dengan Google
                      </Button>
                    </div>
                  )}
                  buttonText="Login with google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          </>
        )}

        <div className="row">
          <div className="col-12 mt-5 text-center">
            <p className="mb-5" style={{ fontSize: "18px" }}>
              Sudah punya akun?{" "}
              <Link to="/sign-in" className="text-primary text-decoration-none">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
