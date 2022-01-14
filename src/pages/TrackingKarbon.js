import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { getCookie } from "../helpers";
import { getByDate, getTracking } from "../redux/actions/action.tracking";
import Layout from "../layouting/Layout";
import MakananModal from "../components/MakananModal";
import "../style/card-makanan.css";
import TrackingCard from "../components/TrackingCard";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function TrackingKarbon() {
  const token = getCookie("token")

  const dispatch = useDispatch()
  const trackingState = useSelector((state) => state.trackingReducer);
  const initialState = "Hari ini"
  const [state, setstate] = useState(initialState)
  const [selectedDate, setSelectedDate] = useState(null)
  const [hidden, sethidden] = useState(true);
  const myRefname = useRef(null);
  let today = new Date()

  const { tracking, loading, error } = trackingState;

  console.log(trackingState);
  function convert(str) {
    let date = str;
		let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);
		return [date.getFullYear(), mnth, day].join("-");
	}
  
  const selectTanggal = (date) => {
    sethidden(false);
    myRefname.current.setFocus(true);
    if(date) {
      let newDate = convert(date)
      setSelectedDate(date)
      setstate(newDate)
    }
  }
  
  useEffect(() => {
    if(selectedDate) {
      dispatch(getByDate(state))
    } else {
      dispatch(getTracking());
    }
    if (hidden === false) {
      myRefname.current.setFocus(true);
			sethidden(true);
		}
  }, [dispatch, hidden, selectedDate, state]);

  if(!token) {
    return <Navigate to="/unauhorized" />
  }

  return(
    <Layout>
      <section className="my-5">
        <div className="container pb-2">
          <div className="row justify-content-around align-items-center text-center">
            <div className="col-1 d-lg-none">
              <button className="btn bg-transparent text-decoration-none border-0"><i className="fas fa-chevron-left"></i></button>
            </div>
            <div className="col-11">
              <h5 className="fw-bold">Tracking Karbon</h5>
            </div>
          </div>
        </div>

        <div className="container pt-4 pb-3">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="dropdown">
                <button className="btn btn-outline-secondary px-3 rounded-08" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-4 text-red"><i className="far fa-calendar-alt"></i></span>
                  <span className="me-4">{state}</span>
                  <span className="text-muted"><i className="fas fa-chevron-down"></i></span>
                </button>
                <ul className="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuButton1">
                  <li 
                    onClick={() => {
                      setstate(initialState);
                      setSelectedDate(null);
                    }}
                  >
                    <p className="dropdown-item pointer mb-0">Hari ini</p>
                  </li>
                  <li onClick={() => selectTanggal()}><p className="dropdown-item pointer mb-0">Pilih Tanggal</p></li>
                </ul>
                <div className="d-flex justify-content-center">
                  <DatePicker
                    className={hidden ? "d-none" : "d-block"}
                    closeOnScroll={true} 
                    selected={selectedDate} 
                    onChange={(date) => selectTanggal(date) } 
                    ref={myRefname}
                    maxDate={today}
                    withPortal
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="card rounded-08 bg-primary text-white text-center">
            <div className="card-body">
              <div className="row gy-4 pt-3">
                <div className="col-12">
                  <p className="fs-2 mb-0 fw-bold"><span className="fa"><i class="fas fa-cloud-meatball"></i></span> {!loading && !error && tracking.tracking  ? tracking.tracking.totKarbon : 0}</p>
                  <p className="fs-6 fw-medium">kg CO<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading || error ? (
          <div className="container">
            <h1>Loading ...</h1>
          </div>
        ) : tracking && tracking.tracking ? (
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
            {
              state === initialState ? (
              <p>
                Anda belum menambahkan makanan untuk hari ini. Silakan tambahkan
                makanan yang sudah anda konsumsi hari ini dari menu <Link to="/pilih-makanan" className="text-primary text-decoration-none">pilih makanan</Link>.
              </p>
              ) : (
                <p>Anda tidak memiliki riwayat makanan pada tanggal {state}.</p>
              )
            }
          </div>
        )}
      </section>
    </Layout>
  )
}

const TrackingSection = ({ makanan }) => {

  return (
    <div className="container">
      <div className="row">
        {makanan.map((el, index) => {
          return (
            <div className="col-12" key={`col-${index}`}>
              <div
                className="pointer"
                key={`onclick-${index}`}
              >
                <TrackingCard
                  image={el.makananID.image}
                  alt_image={el.makananID.makanan}
                  namamakanan={el.makananID.makanan}
                  infoporsi={el.makananID.porsi}
                  porsirekomendasi={el.porsi}
                  modals={true}
                  key={index}
                  id={el.makananID._id}
                ></TrackingCard>
              </div>
            </div>
          );
        })}
      </div>

      <MakananModal karbon={true}></MakananModal>
    </div>
  );
};
