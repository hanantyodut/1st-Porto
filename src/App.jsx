import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Abouts from "./components/Abouts";
import Skill from "./components/Skill";
import Contactme from "./components/Contactme";

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<Abouts />
			<Skill />
			<Contactme />
		</div>
	);
}

export default App;
