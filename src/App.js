import "./App.css";
import { getCookie } from "./helpers";
import HomeGuest from "./pages/HomeGuest";
import HomeLogin from "./pages/HomeLogin";

function App() {

  const token = getCookie("token");
  return (
    <>
      {
        token ? <HomeLogin></HomeLogin> : <HomeGuest></HomeGuest>
      }
    </>
  );

}

export default App;
