import logo from "./logo.svg";
import "./App.css";
import Layout from "./layouting/Layout";
import HomeGuest from "./pages/HomeGuest";
import RekomendasiMakanan from "./pages/RekomendasiMakanan";
import HomeLogin from "./pages/HomeLogin";
import HistoryKarbon from "./pages/HistoryKarbon";
import HistoryKarbon2 from "./pages/HistoryKarbon2";
function App() {
	return (
		<Layout>
			<RekomendasiMakanan></RekomendasiMakanan>
		</Layout>
	);
}

export default App;
