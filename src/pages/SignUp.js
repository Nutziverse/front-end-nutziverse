import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import google from "../images/google.png";
import Layout from "../layouting/Layout";
import "../style/SignUp.css";


export default function SignUp(){
    return(
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h3 className="text-center fw-bold" style={{color:"#302D2D"}}>Buat Akun</h3>
                    </div>
                </div>
            
            {/* Isi Content */}
                <div className="row mt-5">
                    <div className="col-6 mt-4">
                    <div class="form-group">
                        <label for="namalengkap" style={{fontSize:"20px"}}>Nama Lengkap</label>
                        <input type="email" className="form-control form-control-lg mt-2" id="Nama Lengkap" placeholder="Nama Lengkap"></input>
                    </div>
                    </div>
                    <div className="col-6 mt-4">
                    <div className="form-group">
                            <label for="jeniskelamin" style={{fontSize:"20px"}}>Jenis Kelamin</label>
                            <select class="form-control form-control-lg mt-2" id="jeniskelamin" placeholder="Jenis Kelamin"><i class="fas fa-caret-down"></i>
                            <option>Laki-Laki</option>
                            <option>Perempuan</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-6 mt-4">
                    <div className="form-group">
                            <label for="nomortelepon" style={{fontSize:"20px"}}>No. Telepon</label>
                            <input type="email" className="form-control form-control-lg mt-2" id="nomortelepon" placeholder="Nomor Telepon"></input>
                        </div>
                </div>
                <div className="col-6 mt-4">
                    <div className="form-group">
                            <label for="tanggallahir" style={{fontSize:"20px"}}>Tanggal Lahir</label>
                            <input type="email" className="form-control form-control-lg mt-2" id="tanggallahir" placeholder="Tanggal Lahir"></input>
                        </div>
               </div>
               </div>
               <div className="row">
                   <div className="col-6 mt-4">
                   <div className="form-group">
                            <label for="katasandi" style={{fontSize:"20px"}}>Kata Sandi</label>
                            <input type="katasandi" className="form-control form-control-lg mt-2" id="katasandi" placeholder="Kata Sandi"></input>
                        </div>
                   </div>
                   <div className="col-3 mt-4">
                   <div className="form-group">
                            <label for="beratbadan" style={{fontSize:"20px"}}>Berat Badan</label>
                            <input type="beratbadan" className="form-control form-control-lg mt-2" id="Berat Badan" placeholder="Berat Badan                       kg"></input>
                        </div>
                   </div>
                   <div className="col-3 mt-4">
                   <div className="form-group">
                            <label for="tinggibadan" style={{fontSize:"20px"}}>Tinggi Badan</label>
                            <input type="tinggibadan" className="form-control form-control-lg mt-2" id="Tinggi Badan" placeholder="Tinggi                          cm"></input>
                        </div>
                   </div>
               </div>
               <div className="row">
                   <div className="col-6 mt-4">
                   <div className="form-group">
                            <label for="konfirmasikatasandi" style={{fontSize:"20px"}}>Konfirmasi Kata Sandi</label>
                            <input type="katasandi" className="form-control form-control-lg mt-2" id="katasandi" placeholder="Konfirmasi Kata Sandi"></input>
                        </div>
                   </div>
                   <div className="col-6 mt-4">
                   <div className="form-group">
                            <label for="aktivitasfisik" style={{fontSize:"20px"}}>Aktivitas Fisik</label>
                            <select className="form-control form-control-lg mt-2" id="aktivitasfisik">
                            <option>Tidak Berolahraga</option>
                            <option>Jarang Berolahraga</option>
                            <option>Sering Berolahraga</option>
                            </select>
                        </div>
                   </div>
               </div>
               <div className="row">
                   <div className="col-6 mt-2">
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                        <label className="form-check-label" for="inlineCheckbox1" style={{color:"#999999"}}>Tampilkan Kata Sandi</label>
                    </div>
                   </div>
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                    <button type="submit" className="btn btn-sm btn-main text-center" style={{backgroundColor: "#067cc6",fontSize:"20px"
                             ,boxShadow: "0 8px 16px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.19)",borderRadius:"8px",
                             padding: "15px 18px;",color:"white",height: "50px",width:"500px"}}>
                            Daftar
                    </button>
                    </div>
                </div>
               </div>
               <div className="row">
                   <div className="col-12 mt-4 text-center">
                       <p className="" style={{color:"#6E6E6E",fontSize:"20px"}}>atau</p>
                   </div>
               </div>
                <div className="row">
                    <div className="col-12 mt-3 text-center">
                    <button type="submit" className="btn btn-sm btn-main fw-bold" style={{backgroundColor: "white",fontSize:"18px"
                             ,boxShadow: "0 8px 16px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.19)",borderRadius:"10px",
                             padding: "15px 18px;",height: "50px",width:"500px"}}>
                            <img src={google} style={{height:"25px",marginRight:"10px"}}></img>Daftar dengan Google
                            </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                    <p className="mb-5" style={{fontSize:"18px"}}>
                          Belum punya akun?{" "}
                          <Link to="/sign-up" className="text-primary text-decoration-none">
                            Daftar
                          </Link>
                        </p> 
                    </div>
                </div>
                
            </div>
        </Layout>
    );
}
