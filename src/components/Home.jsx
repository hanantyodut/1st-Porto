import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
// import { useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
	// const [slide1, setSlide1] = useState(false);

	return (
		<div name="home" className="w-full h-screen z-30 bg-[#ad9a85] ">
			{/* Greetings */}
			<div className="greet max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
				<p className="text-2xl font-semibold text-[#ffd700] ">Hi! my name is</p>
				<h1 className="name text-8xl text-white mb-[10px] font-bold">
					Hanantyo Dian Utomo
				</h1>
				<div className="flex justify-between text-gray-700">
					<h2 className="text-3xl font-bold text-[#4c505d] mt-[20px]">
						Im a web development student and hopefully next Front End Developer.
					</h2>
					<p className="text-end pt-9 text-gray-800 ml-20">
						Currently Im still learning at Purwadhika, but hopefully I can get
						more experience from multiple projects in the future. Looking
						forward to work with you!
					</p>
				</div>
				<div className="arrowTo flex justify-between mt-[40px]">
					<Link to="About" smooth={true} duration={500}>
						<button className="group px-6 py-3 border-solid border-2 border-black rounded-lg my-[20px] flex flex-col items-start hover:text-white font-semibold duration-300 hover:bg-[#746d69] hover:border-white">
							Let me introduce you about myself!
							<span className="group-hover:rotate-90 duration-100">
								<HiArrowNarrowRight
									size={25}
									// className="w-[25px] pt-[3px] hover:rotate-90 duration-100"
								/>
							</span>
						</button>
					</Link>
					<Link to="Skill" smooth={true} duration={500}>
						<button className="group px-6 py-3 border-solid border-2 border-black rounded-lg my-[20px] flex flex-col items-end hover:text-white font-semibold duration-300 hover:bg-[#746d69] hover:border-white">
							Straight to know my Experiences!
							<span className="group-hover:rotate-[-90deg] duration-100">
								<HiArrowNarrowLeft size={25} />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
