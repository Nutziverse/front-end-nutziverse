import logo from "./logo.svg";
import "./App.css";
import Layout from "./layouting/Layout";
import HomeGuest from "./pages/HomeGuest";
import RekomendasiMakanan from "./pages/RekomendasiMakanan";
function App() {
	return (
		<Layout>
			<RekomendasiMakanan></RekomendasiMakanan>
		</Layout>
	);
}

export default App;
