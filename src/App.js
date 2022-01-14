import "./App.css";
import { getCookie } from "./helpers";
import Layout from "./layouting/Layout";
import HomeGuest from "./pages/HomeGuest";
import HomeLogin from "./pages/HomeLogin";

function App() {

  const token = getCookie("token");
  return (
    <Layout>{token ? <HomeLogin></HomeLogin> : <HomeGuest></HomeGuest>}</Layout>
  );

}

export default App;
