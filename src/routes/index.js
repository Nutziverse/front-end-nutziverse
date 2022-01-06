import { Routes, Route } from "react-router";
import Profile from "../pages/Profile";
import Layout from "../layouting/Layout";
import HomeLogin from "../pages/HomeLogin";
import App from "../App";

export default function Routers() {
	return (
		<Routes>
			<Route path="/" element={<App />}></Route>
			<Route path="/profile" element={<Profile />}></Route>
			<Route path="/layout" element={<Layout />}></Route>
		</Routes>
	);
}
