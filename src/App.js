import logo from "./logo.svg";
import "./App.css";
import Layout from "./layouting/Layout";
import HomeGuest from "./pages/HomeGuest";
import RekomendasiMakanan from "./pages/RekomendasiMakanan";
import HomeLogin from "./pages/HomeLogin";
import HistoryKarbon from "./pages/HistoryKarbon";
function App() {
	return (
		<Layout>
			<HistoryKarbon></HistoryKarbon>
		</Layout>
	);
}

export default App;
