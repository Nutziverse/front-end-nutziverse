import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CardResep from "../components/CardResep";
import Layout from "../layouting/Layout";
import { getResep } from "../redux/actions/action.resep";
import "../style/card-makanan.css"

export default function Resep() {
  const dispatch = useDispatch();
  const Navigate = useNavigate()

  const resepState = useSelector((state) => state.ResepReducer);
  const { resep, loading } = resepState;
  const [input, setinput] = useState("");
  const [filterResep, setfilterResep] = useState([]);

  const searchResep = () => {
    let filter = resep.filter((item) => item.idMakanan.makanan.toLowerCase().includes(input));
    setfilterResep(filter);
  };

  useEffect(() => {
    dispatch(getResep());
  }, [dispatch]);
  return (
    <Layout>
      <section className="py-2">
        <div className="container py-5">
          <div className="row align-items-center justify-content-around">
            <div className="col-1 d-lg-none">
              <button className="btn bg-transparent text-decoration-none border-0" onClick={() => Navigate(-1)}><i className="fas fa-chevron-left"></i></button>
            </div>
            <div className="col-11 col-md-7 text-center text-md-start mb-4">
              <h5 className="fw-bold">Resep</h5>
            </div>
            <div className="col-12 col-md-10 col-lg-5">
              <div class="input-group">
                <input
                  onChange={(e) => setinput(e.target.value.toLowerCase())}
                  type="text"
                  class="form-control"
                  placeholder="Cari . . ."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  id="button-addon2"
                  onClick={() => searchResep()}
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h5 className="fw-medium mb-4">Mau masak apa hari ini?</h5>
          <div className="row gy-3  justify-content-between">
            {!loading ? (
              filterResep.length > 0 ? (
                filterResep.map((el, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                      <Link
                        to={`/resep/detail/${el._id}`}
                        className="pointer text-decoration-none"
                      >
                        <CardResep
                          title={el.idMakanan.makanan}
                          imageUrl={el.idMakanan.image}
                          kalori={el.idMakanan.kaloriMakanan}
                          karbon={el.idMakanan.karbon}
                          key={el._id}
                        ></CardResep>
                      </Link>
                    </div>
                  );
                })
              ) : (
                resep.map((el, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                      <Link className="pointer text-decoration-none" to={`/resep/detail/${el._id}`}>
                        <CardResep
                          title={el.idMakanan.makanan}
                          imageUrl={el.idMakanan.image}
                          kalori={el.idMakanan.kaloriMakanan}
                          karbon={el.idMakanan.karbon}
                          key={el._id}
                        ></CardResep>
                      </Link>
                    </div>
                  );
                })
              )
            ) : (
              <h1>Loading . . .</h1>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
