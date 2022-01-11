import logo from "./logo.svg";
import "./App.css";
import Layout from "./layouting/Layout";
import HomeGuest from "./pages/HomeGuest";
import RekomendasiMakanan from "./pages/RekomendasiMakanan";
import HomeLogin from "./pages/HomeLogin";
import HistoryKarbon from "./pages/HistoryKarbon";
import HistoryKarbon3 from "./pages/HistoryKarbon3";
import CallToAction from "./pages/CallToAction";
function App() {
	return (
		<Layout>
			<CallToAction />
		</Layout>
	);
}

export default App;
