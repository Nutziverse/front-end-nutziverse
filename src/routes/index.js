import { Routes, Route } from "react-router";
import Layout from "../layouting/Layout";
import EditProfile from "../pages/EditProfile";
import App from "../App";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/editprofile" element={<EditProfile />}></Route>
      <Route path="/layout" element={<Layout />}></Route>
    </Routes>
  );
}
