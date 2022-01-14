import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardMakanan from "../components/CardMakanan";
import MakananModal from "../components/MakananModal";
import Layout from "../layouting/Layout";
import { getMakanan } from "../redux/actions/action.makanan";
import { showModal } from "../redux/actions/action.modal";
import "../style/card-makanan.css";

export default function PilihMakanan() {
  const dispatch = useDispatch();
  const allMakananState = useSelector((state) => state.allmakananReducer);
  const { allMakanan, loading, error } = allMakananState;
  const [input, setinput] = useState("");
  const [filterMakanan, setfilterMakanan] = useState([]);
  
  const searchMakanan = () => {
    let filter = allMakanan.filter((item) =>
      item.makanan.toLowerCase().includes(input)
    );
    setfilterMakanan(filter);
  };

  useEffect(() => {
    dispatch(getMakanan());
  }, [dispatch]);

  return (
    <Layout>
      <section className="py-2">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-4">
              <h5 className="fw-bold">Pilih Makanan</h5>
            </div>
            <div className="col-10 col-md-5">
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
                  onClick={() => searchMakanan()}
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-2 col-md-1">
              <Link
                to="/pilih-makanan/detail"
                className="btn p-0 text-primary fs-2"
              >
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-3">
            {!loading
              ? filterMakanan.length > 0
                ? filterMakanan.map((el, index) => {
                    return (
                      <div className="col-6 col-md-4 col-lg-3" key={index}>
                        <div
                          onClick={() => dispatch(showModal(el._id))}
                          className="pointer"
                        >
                          <CardMakanan
                            makanan={el.makanan}
                            image={el.image}
                            penyetaraanPorsi={el.porsi}
                            kalori={el.kaloriMakanan}
                            karbon={el.karbon}
                            key={el._id}
                          ></CardMakanan>
                        </div>
                      </div>
                    );
                  })
                : allMakanan.map((el, index) => {
                    return (
                      <div className="col-6 col-md-4 col-lg-3" key={index}>
                        <div
                          onClick={() => dispatch(showModal(el._id))}
                          className="pointer"
                        >
                          <CardMakanan
                            makanan={el.makanan}
                            image={el.image}
                            penyetaraanPorsi={el.porsi}
                            kalori={el.kaloriMakanan}
                            karbon={el.karbon}
                            key={el._id}
                          ></CardMakanan>
                        </div>
                      </div>
                    );
                  })
              : null}
          </div>

          <MakananModal pilih={true}></MakananModal>
        </div>
      </section>
    </Layout>
  );
}
