import { Routes, Route } from "react-router";
import Layout from "../layouting/Layout";
import EditProfile from "../pages/EditProfile";
import App from "../App";
import SignIn from "../pages/SignIn";
import Akun from "../pages/Akun";
import SignUp from "../pages/SignUp";
import PilihMakanan from "../pages/PilihMakanan";
import NotFound from "../pages/NotFound";


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/editprofile" element={<EditProfile />}></Route>
      <Route path="/layout" element={<Layout />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/akun" element={<Akun />}></Route>
      <Route path="/pilih-makanan" element={<PilihMakanan />}></Route>
      <Route path="*" element={<NotFound />}></Route>
  
    </Routes>
  );
}
