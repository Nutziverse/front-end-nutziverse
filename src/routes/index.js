import { Routes, Route } from "react-router";
import Layout from "../layouting/Layout";
import HomeLogin from "../pages/HomeLogin";
import EditProfile from "../pages/EditProfile";
import App from "../App";
import SignIn from "../pages/SignIn";
import Akun from "../pages/Akun";
import SignUp from "../pages/SignUp";
import AkunGoogle from "../pages/AkunGoogle";
import PilihMakanan from "../pages/PilihMakanan";
import RekomendasiMakanan from "../pages/RekomendasiMakanan";
import KeranjangMakanan from "../pages/KeranjangMakanan";

export default function Routers() {
	return (
		<Routes>
			<Route path="/" element={<App />}></Route>
			<Route path="/home-login" element={<HomeLogin />}></Route>
			<Route path="/rekomendasi" element={<RekomendasiMakanan />}></Route>
			<Route path="/editprofile" element={<EditProfile />}></Route>
			<Route path="/layout" element={<Layout />}></Route>
			<Route path="/sign-in" element={<SignIn />}></Route>
			<Route path="/sign-up" element={<SignUp />}></Route>
			<Route path="/akun" element={<Akun />}></Route>
			<Route path="/akungoogle" element={<AkunGoogle />}></Route>
			<Route path="/pilih-makanan" element={<PilihMakanan />}></Route>
			<Route
				path="/pilih-makanan/detail"
				element={<KeranjangMakanan />}
			></Route>
		</Routes>
	);
}
