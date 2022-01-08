import { Routes, Route } from "react-router";
import Profile from "../pages/Profile";
import Layout from "../layouting/Layout";
import App from "../App";
import SignIn from "../pages/SignIn";
import Akun from "../pages/Akun";
import AkunGoogle from "../pages/AkunGoogle";


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/layout" element={<Layout />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/akun" element={<Akun />}></Route>
      <Route path="/akungoogle" element={<AkunGoogle />}></Route>
      
      
  
    </Routes>
  );
}
