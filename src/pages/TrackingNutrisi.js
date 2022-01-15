import Layout from "../layouting/Layout";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByDate, getTracking } from "../redux/actions/action.tracking";
import TrackingCard from "../components/TrackingCard";
import MakananModal from "../components/MakananModal";
import "../style/card-makanan.css";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getUSER } from "../redux/actions/action.User";
import { getCookie } from "../helpers";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);


export default function TrackingNutrisi() {
  const token = getCookie("token")
  const Navigate = useNavigate()
  
  const dispatch = useDispatch();
  const trackingState = useSelector((state) => state.trackingReducer);
  const userState = useSelector((state) => state.UserReducer)
  const initialState = "Hari ini"
  const [state, setstate] = useState(initialState)
  const [selectedDate, setSelectedDate] = useState(null)
  const [hidden, sethidden] = useState(true);
  const myRefname = useRef(null);

  let {User} = userState
  if(User.legth === 0)
    User = null

  let today = new Date()
  const { tracking, loading } = trackingState;
  let karbohidrat = 0, protein = 0, lemak = 0
  let butuhkarbohidrat = 0, butuhprotein = 0, butuhlemak = 0

  
  if(!loading && tracking && tracking.tracking && User) {
    butuhkarbohidrat = Number(User.gizi.karbohidrat.toFixed(2))
    butuhprotein = Number(User.gizi.protein.toFixed(2))
    butuhlemak = Number(User.gizi.lemak.toFixed(2))

    karbohidrat = tracking.totKarbohidrat
    karbohidrat = karbohidrat/User.gizi.karbohidrat * 100
    karbohidrat = Number(karbohidrat.toFixed(2))
    
    protein = tracking.totProtein
    protein = protein/User.gizi.protein * 100
    protein = Number(protein.toFixed(2))
    
    lemak = tracking.totLemak
    lemak = lemak/User.gizi.lemak * 100
    lemak = Number(lemak.toFixed(2))
  }

  if(karbohidrat > 100) {
    karbohidrat = 100
  }
  if(protein > 100) {
    protein = 100
  }
  if(lemak > 100) {
    lemak = 100
  }

  // for chart
  const borderRadiusAllCorners = {
    topLeft: 50,
		topRight: 50,
		bottomLeft: 50,
		bottomRight: 50,
	};
  
  const data = (first, second) => ({
    labels: ["Nutrisi"],
		datasets: [
      {
        label: "Terpenuhi",
				data: [first],
				backgroundColor: ["#F9AC3A"],
				borderColor: ["#F9AC3A"],
				borderWidth: 1,
				borderRadius: borderRadiusAllCorners,
				borderSkipped: false,
				barThickness: 15,
			},
			{
        label: "Belum Terpenuhi",
				data: [second],
				backgroundColor: ["transparent"],
				borderColor: ["transparent"],
				borderWidth: 1,
				borderRadius: borderRadiusAllCorners,
				borderSkipped: false,
				barThickness: 15,
			},
		],
	});
	const maxdata = (total) => ({
    labels: ["Nutrisi"],
		datasets: [
      {
        label: "My First Dataset",
				data: [12],
				backgroundColor: ["white"],
				borderColor: ["white"],
				borderWidth: 1,
				borderRadius: borderRadiusAllCorners,
				borderSkipped: false,
				barThickness: 15,
			},
		],
	});
	const config = {
    indexAxis: "y",
		plugins: {
      legend: {
        display: false,
			},
		},
		responsive: true,
		maintainAspectRatio: true,
		scales: {
      y: {
        display: false,
				stacked: true,
			},
			x: {
        display: false,
				stacked: true,
			},
		},
	};
	const config1 = {
    indexAxis: "y",
		plugins: {
      legend: {
				display: false,
			},
		},
		animation: {
      duration: 0,
		},
		responsive: true,
		maintainAspectRatio: true,
		scales: {
      y: {
        display: false,
				stacked: true,
			},
			x: {
        display: false,
				stacked: true,
			},
		},
	};
  
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
    dispatch(getUSER())
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
    Navigate("/unauthorized")
  }

  return (
    <Layout>
      <section className="my-5">
        <div className="container pb-2">
          <div className="row justify-content-around align-items-center text-center">
            <div className="col-1 d-lg-none">
              <button className="btn bg-transparent text-decoration-none border-0" onClick={() => Navigate(-1)}><i className="fas fa-chevron-left"></i></button>
            </div>
            <div className="col-11">
              <h5 className="fw-bold">Tracking Nutrisi</h5>
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
                  <p className="fs-2 mb-0 fw-bold"><span className="fa"><i className="fas fa-fire"></i></span> {!loading && tracking.tracking  ? tracking.tracking.totKalori : 0}</p>
                  <p className="fs-6 fw-medium">kkal</p>
                </div>

                <div className="col-12">
                  <div className="row gy-4">
                    <div className="col-sm-4 col-12">
                      <p className="fs-5 fw-semi-bold">{ !loading && tracking && tracking.tracking ? tracking.totKarbohidrat : 0} <sup className="fs-6 text-white-8 sup">/{butuhkarbohidrat}</sup></p>
                      {/* this will be chart */}
                      <div className="custom-rows">
                        <Bar data={data(karbohidrat,100-karbohidrat)} options={config} id="stacked1" />
                        <Bar data={maxdata(100)} options={config1} id="stacked" />
                      </div>
                      <p className="fs-6 fw-medium">Karbohidrat</p>
                    </div>
                    <div className="col-sm-4 col-12">
                      <p className="fs-5 fw-semi-bold">{ !loading && tracking && tracking.tracking ? tracking.totProtein : 0} <sup className="fs-6 text-white-8 sup">/{butuhprotein}</sup></p>
                      {/* this will be chart */}
                      <div className="custom-rows">
                        <Bar data={data(protein,100-protein)} options={config} id="stacked1" />
                        <Bar data={maxdata(100)} options={config1} id="stacked" />
                      </div>
                      <p className="fs-6 fw-medium">Protein</p>
                    </div>
                    <div className="col-sm-4 col-12">
                      <p className="fs-5 fw-semi-bold">{ !loading && tracking && tracking.tracking ? tracking.totLemak : 0} <sup className="fs-6 text-white-8 sup">/{butuhlemak}</sup></p>
                      {/* this will be chart */}
                      <div className="custom-rows">
                        <Bar data={data(lemak,100-lemak)} options={config} id="stacked1" />
                        <Bar data={maxdata(100)} options={config1} id="stacked" />
                      </div>
                      <p className="fs-6 fw-medium">Lemak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
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
  );
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
                  key={index}
                  id={el.makananID._id}
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
