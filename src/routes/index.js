import { Routes, Route } from "react-router";
import Profile from "../pages/Profile";
import Layout from "../layouting/Layout";
import App from "../App";
import SignIn from "../pages/SignIn";
import Akun from "../pages/Akun";
import SignUp from "../pages/SignUp";
import AkunGoogle from "../pages/AkunGoogle";
import TrackingNutrisi from "../pages/TrackingNutrisi";


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/layout" element={<Layout />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/akun" element={<Akun />}></Route>
      <Route path="/akungoogle" element={<AkunGoogle />}></Route>
      <Route path="/tracking-nutrisi" element={<TrackingNutrisi />}></Route>
      
  
    </Routes>
  );
}
