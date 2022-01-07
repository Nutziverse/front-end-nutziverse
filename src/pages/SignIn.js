import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo_awal from "../images/Opening.png";
import "../style/SignIn.css";
import google from "../images/google.png";
import CardResep from "../components/CardResep";


export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [errorsMessage, setErrorMessage] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };
  let Navigate = useNavigate();

  const onSubmit = (data) => {
    let inputTelepon = data.telepon;
    let inputPassword = data.password;

    let userTelepon = localStorage.getItem("SubmissionTelepon");
    let userPassword = localStorage.getItem("SubmissionPassword");
    if (inputTelepon !== userTelepon || inputPassword !== userPassword) {
      setErrorMessage(true);
    } else {
      localStorage.setItem("isLogin", "true");
      Navigate("/");
    }
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <main className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10 col-xl-8 shadow rounded-6">
                  <div className="row justify-content-center py-md-0 py-5">
                    <div className="text-center d-md-none">
                      <h3>Masuk</h3>
                      <p className="text-secondary mt-1 mb-2">Selamat datang di Nutziverse</p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-7 p-2 my-auto">
                      <img src={logo_awal} className="img-fluid w-100" alt="property pict" />
                    </div>

                    <div className="col-lg-5 col-md-6 col-12 p-lg-5 px-4 pe-lg-2 py-md-5">
                      <div className="mb-4 d-none d-md-block">
                        <h2 className="">Masuk</h2>
                        <p className="text-secondary mt-1">Selamat datang di Nutziverse</p>
                      </div>
                      {/* Alert */}

                      <div className={`alert alert-danger align-items-center ${errorsMessage ? "d-flex" : "d-none"}`} role="alert">
                        <div>No.telepon dan Password tidak sesuai !</div>
                      </div>

                      <form noValidate onSubmit={handleSubmit(onSubmit)} id="loginForm">
                        <div className="mb-3">
                          <label htmlFor="text" className="form-label">
                           Nomor telepon
                          </label>
                          <div className="input-group mb-1">
                            <span className="input-group-text" id="basic-addon1">
                              <i className="far fa-at"></i>
                            </span>
                            <input
                              type="text"
                              className={`form-control ${errors.telepon && "invalid"}`}
                              {...register("telepon", {
                                required: "Nomor Telepon tidak boleh kosong",
                                pattern: {
                                  value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
                                  message: "Nomor Telepon tidak valid",
                                },
                              })}
                              placeholder="Nomor Telepon"
                              id="Telepon"
                              autoComplete="off"
                              onKeyUp={() => {
                                trigger("telepon");
                              }}
                            />
                          </div>
                          {errors.telepon && <small className="text-danger">{errors.telepon.message}</small>}
                        </div>

                        <div className="mb-2">
                          <label htmlFor="password" className="form-label">
                            Kata Sandi
                          </label>
                          <div className="input-group mb-1">
                            <span className="input-group-text" id="basic-addon1">
                              <i className="far fa-lock"></i>
                            </span>
                            <input
                              type={showPassword ? "text" : "password"}
                              className={`form-control ${errors.password && "invalid"}`}
                              {...register("password", {
                                required: "Password tidak boleh kosong",
                                pattern: {
                                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                  message: "Min. 8 karakter, huruf dan angka",
                                },
                              })}
                              placeholder="masukan kata sandi"
                              id="password"
                              autoComplete="off"
                            />
                          </div>
                          {errors.password && <small className="text-danger">{errors.password.message}</small>}
                        </div>

                        <div className="mb-3 form-check">
                          <input type="checkbox" onClick={() => togglePasswordVisiblity()} className="form-check-input" id="showPassword" />
                          <label className="form-check-label" htmlFor="showPassword">
                            <p>Tampilkan Kata Sandi</p>
                          </label>
                        </div>
                        
                  
                        <div className="d-grid col-12 mt-md-4 mt-3">
                        
                            <button type="submit" className="btn btn-sm btn-main" style={{backgroundColor: "#067cc6",fontSize:"16px"
                             ,boxShadow: "0 8px 16px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.19)",borderRadius:"8px",
                             padding: "15px 18px;",color:"white"}}>
                             Masuk
                            </button>
                          
                        </div>
                  

                        <div className="text-center d-grid col-12 mt-md-2 mt-2">
                            atau
                        </div>

                        <div className="d-grid col-12 mt-md-3 mt-2">
                            <button type="submit" className="btn btn-sm btn-main" style={{backgroundColor: "white",fontSize:"16px"
                             ,boxShadow: "0 8px 16px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.19)",borderRadius:"8px",
                             padding: "15px 18px;"}}>
                            <img src={google} style={{height:"16px",marginRight:"10px"}}></img>Masuk dengan Google+
                            </button>
                        </div>

                      </form>
                      <div className="text-center mt-4">
                        <p className="mb-0">
                          Belum punya akun?{" "}
                          <Link to="/sign-up" className="text-primary text-decoration-none">
                            Daftar
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
