import "./App.css";
import { getCookie } from "./helpers";
import Layout from "./layouting/Layout";
import HomeGuest from "./pages/HomeGuest";

function App() {
  const token = getCookie("token");
  return <Layout>{token ? null : <HomeGuest></HomeGuest>}</Layout>;
}

export default App;
