import Layout from "../layouting/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracking } from "../redux/actions/action.tracking";
import TrackingCard from "../components/TrackingCard";
import { showModal } from "../redux/actions/action.modal";
import MakananModal from "../components/MakananModal";
import "../style/card-makanan.css";
import { Link } from "react-router-dom";

export default function TrackingNutrisi() {
  const dispatch = useDispatch();
  const trackingState = useSelector((state) => state.trackingReducer);

  const { tracking, loading, error } = trackingState;

  useEffect(() => {
    dispatch(getTracking());
  }, [dispatch]);

  console.log(tracking);

  return (
    <Layout>
      <section className="my-5">
        <div className="container pb-2">
          <div className="row justify-content-around align-items-center text-center">
            <div className="col-1 d-lg-none">
              <button className="btn bg-transparent text-decoration-none border-0"><i class="fas fa-chevron-left"></i></button>
            </div>
            <div className="col-11">
              <h5 className="fw-bold">Tracking Nutrisi</h5>
            </div>
          </div>
        </div>

        <div className="container pt-4 pb-3">
          <div className="row justify-content-center">
            <div className="col-9">
              <select class="form-select rounded-08" aria-label="Default select example">
                <option selected >Hari ini</option>
                <option value="pilih-tanggal">Pilih Tanggal</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div class="card rounded-08 bg-primary text-white text-center">
            <div class="card-body">
              <div className="row gy-4 pt-3">
                <div className="col-12">
                  <p className="fs-2 mb-0 fw-bold"><span className="fa"><i class="fas fa-fire"></i></span> {!loading && tracking.tracking  ? tracking.tracking.totKalori : 0}</p>
                  <p className="fs-6 fw-medium">kkal</p>
                </div>

                <div className="col-12">
                  <div className="row gy-4">
                    <div className="col-sm-4 col-12">
                      <p className="fs-5 fw-semi-bold">{ !loading ? tracking.totKarbohidrat : 0} <sup className="fs-6 text-white-8 sup">/350</sup></p>
                      {/* this will be chart */}
                      <p className="fs-6 fw-medium">Karbohidrat</p>
                    </div>
                    <div className="col-sm-4 col-12">
                      <p className="fs-5 fw-semi-bold">{ !loading ? tracking.totLemak : 0} <sup className="fs-6 text-white-8 sup">/350</sup></p>
                      {/* this will be chart */}
                      <p className="fs-6 fw-medium">Protein</p>
                    </div>
                    <div className="col-sm-4 col-12">
                      <p className="fs-5 fw-semi-bold">{ !loading ? tracking.totProtein : 0} <sup className="fs-6 text-white-8 sup">/350</sup></p>
                      {/* this will be chart */}
                      <p className="fs-6 fw-medium">Lemak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading || error ? (
          <h1>Loading ...</h1>
        ) : tracking.tracking ? (
          <TrackingSection
            makanan={tracking.tracking.makanan}
          ></TrackingSection>
        ) : (
          <div className="container py-4 text-center">
            <div className="row justify-content-center">
              <div className="col-6 col-md-4 col-lg-3">
                <img src="https://i.ibb.co/ZMFDD2C/Empty-pana.png" alt="Empty" className="img-fluid" />
              </div>
            </div>
            <p>
              Anda belum menambahkan makanan untuk hari ini. Silakan tambahkan
              makanan yang sudah anda konsumsi hari ini dari menu <Link to="/pilih-makanan" className="text-primary text-decoration-none">pilih makanan</Link>.
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}

const TrackingSection = ({ makanan }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        {makanan.map((el, index) => {
          return (
            <div className="col-12" key={`col-${index}`}>
              <div
                className="pointer"
                onClick={() => dispatch(showModal(el.makananID._id))}
                key={`onclick-${index}`}
              >
                <TrackingCard
                  image={el.makananID.image}
                  alt_image={el.makananID.makanan}
                  makanan={el.makananID.makanan}
                  infoporsi={el.makananID.porsi}
                  kuantitas={el.porsi}
                  modals={true}
                  key={index}
                ></TrackingCard>
              </div>
            </div>
          );
        })}
      </div>

      <MakananModal></MakananModal>
    </div>
  );
};
