import "./Home.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
	return (
		<div name="home" className="homepage w-full h-screen">
			{/* Greetings */}
			<div className="greet max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bg-">
				<p className="p1">Hi! my name is</p>
				<h1>Hanantyo Dian Utomo</h1>
				<h2>Im a wannabe Front End Developer! hopefully.</h2>
				<p>
					Currently Im still learning at Purwadhika, but hopefully I can get
					more experience from multiple projects in the future, Im looking
					forward to work with you!
				</p>
				<div>
					<button>
						My past Experiences!
						<HiArrowNarrowRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
