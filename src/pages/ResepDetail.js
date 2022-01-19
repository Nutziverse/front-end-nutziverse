import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../components/Loading";
import Layout from "../layouting/Layout";
import { getResepByID } from "../redux/actions/action.resep";
import "../style/card-makanan.css";

export default function ResepDetail() {
  let params = useParams();
  const { id } = params;

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const resepIDstate = useSelector((state) => state.ResepIDReducer);
  const { resepID, loading } = resepIDstate;

  useEffect(() => {
    dispatch(getResepByID(id));
  }, [dispatch, id]);

  const Statsrekom = ({ colors, angka, satuan, nama }) => (
    <div className="position-relative">
      <div
        className="border border-primary rounded shadow-sm p-2"
        style={{ width: "80px" }}
      >
        <h5 className="fw-bold text-center">{angka}</h5>
        <h6 className="fw-light text-center">{satuan}</h6>
      </div>

      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: colors,
          position: "absolute",
          borderRadius: "50%",
          top: "-8px",
          left: "-8px",
        }}
      ></div>
      <div className="d-flex justify-content-center mt-3">
        <h6 className="text-center">{nama}</h6>
      </div>
    </div>
  );

  return (
    <Layout>
      <section className="container py-5">
        <div className="row align-items-center justify-content-around d-lg-none mb-4">
          <div className="col-1">
            <button
              className="btn bg-transparent text-decoration-none border-0"
              onClick={() => Navigate(-1)}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          <div className="col-11 col-md-7 text-center text-md-start">
            <h5 className="fw-bold mb-0">Resep</h5>
          </div>
        </div>
        <div className="row gx-lg-5">
          {loading ? (
            <LoadingComponent />
          ) : resepID && resepID.idMakanan ? (
            <>
              <div className="col-12 d-lg-none">
                <img
                  src={resepID.image}
                  alt=""
                  className="img-fluid max-h-10rem rounded-08"
                />
              </div>
              <div className="col-12 col-lg-7 mt-3">
                <div className="d-none d-lg-block mb-3">
                  {" "}
                  <Link to="/resep" className="text-muted text-decoration-none">
                    <small>Resep</small>
                  </Link>{" "}
                  <small className="text-muted">{`> ${resepID.idMakanan.makanan}`}</small>
                </div>
                <h5 className="fw-bold">{resepID.idMakanan.makanan}</h5>
                <p className="text-muted mt-3 mb-4">
                  <span className="me-5">
                    <i class="fal fa-soup"></i> {resepID.porsi} porsi
                  </span>{" "}
                  <span>
                    <i class="far fa-clock"></i> {resepID.waktupenyajian}
                  </span>
                </p>
                <div className="d-flex justify-content-between mx-auto mt-3 flex-wrap">
                  <Statsrekom
                    colors={"red"}
                    nama={"Kalori"}
                    angka={resepID.idMakanan.kaloriMakanan * resepID.porsi}
                    satuan={"gr"}
                  ></Statsrekom>
                  <Statsrekom
                    colors={"orange"}
                    nama={"Karbohidrat"}
                    angka={resepID.idMakanan.karbohidrat * resepID.porsi}
                    satuan={"gr"}
                  ></Statsrekom>
                  <Statsrekom
                    colors={"green"}
                    nama={"Protein"}
                    angka={resepID.idMakanan.protein * resepID.porsi}
                    satuan={"gr"}
                  ></Statsrekom>
                  <Statsrekom
                    colors={"yellow"}
                    nama={"Lemak"}
                    angka={resepID.idMakanan.lemak * resepID.porsi}
                    satuan={"gr"}
                  ></Statsrekom>
                  <Statsrekom
                    colors={"black"}
                    nama={"Karbon"}
                    angka={resepID.idMakanan.karbon * resepID.porsi}
                    satuan={"kg CO2"}
                  ></Statsrekom>
                </div>
                <div className="mt-4 mt-lg-5 d-lg-none">
                  <h6 className="fw-medium">Bahan-bahan</h6>
                  <ul>
                    {resepID.bahan.map((el) => {
                      return <li className="mb-2">{el}</li>;
                    })}
                  </ul>
                </div>
                <div className="mt-4 mt-lg-5">
                  <h6 className="fw-medium">Langkah-langkah</h6>
                  <p>{resepID.deskripsi}</p>
                </div>
              </div>
              <div className="col-lg-5 mt-3 d-none d-lg-block">
                <img
                  src={resepID.image}
                  alt=""
                  className="img-fluid max-h-10rem rounded-08"
                />
                <div className="mt-lg-4 card p-3 border-0 shadow rounded-08">
                  <h6 className="fw-medium">Bahan-bahan</h6>
                  <ul>
                    {resepID.bahan.map((el) => {
                      return <li className="mb-2">{el}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="col-12 pt-5">
              <h5>Mohon maaf, data resep tidak ditemukan</h5>
              <p
                className="text-decoration-underline mt-4"
                onClick={() => Navigate("/")}
              >
                Kembali ke beranda
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
