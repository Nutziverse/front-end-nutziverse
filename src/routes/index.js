import { Routes, Route } from "react-router";
import Layout from "../layouting/Layout";
import EditProfile from "../pages/EditProfile";
import App from "../App";
import SignIn from "../pages/SignIn";
import Akun from "../pages/Akun";
import SignUp from "../pages/SignUp";
import AkunGoogle from "../pages/AkunGoogle";
import TrackingNutrisi from "../pages/TrackingNutrisi";
import PilihMakanan from "../pages/PilihMakanan";
import TrackingKarbon from "../pages/TrackingKarbon";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/editprofile" element={<EditProfile />}></Route>
      <Route path="/layout" element={<Layout />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/akun" element={<Akun />}></Route>
      <Route path="/akungoogle" element={<AkunGoogle />}></Route>
      <Route path="/tracking-nutrisi" element={<TrackingNutrisi />}></Route>
      <Route path="/pilih-makanan" element={<PilihMakanan />}></Route>
      <Route path="/karbon" element={<TrackingKarbon />}></Route>
    </Routes>
  );
}
