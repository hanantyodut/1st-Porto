// import HTML from "./src/assets/html.png";
// import JavaScript from "./src/assets/javascript.png";
// import ReactImg from "./src/assets/react.png";
// import { Chores } from "./src/assets/chores.jpeg";

const Skill = () => {
	return (
		<div
			name="Skill"
			className="bg-[#ad9a85] w-full md:h-screen text-[#4c505d] ">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-6">
					{/* FOR SOFTWARE EXPERIENCE */}
					<div>
						<p className="text-3xl font-bold inline border-b-8 border-gray-800">
							Software Experience
						</p>
						<p className="pt-6 pb-2 font-semibold text-xl">
							The following are multiple softwares that Ive worked with...
						</p>
					</div>
					<div className="w-full grid sm:grid-cols-4 grid-cols-2 gap-8 text-center py-4">
						<div className="group shadow-md shadow-[#040c16] rounded-xl hover:scale-110 duration-500 bg-[#75604b] h-[8rem]">
							<img
								src="./src/assets/javascript.png"
								className="w-[3.5rem] mx-auto pt-4"
							/>
							<p className="pt-3 font-semibold group-hover:text-[#ffd700] text-lg pb-3 duration-100 ">
								JavaScript
							</p>
						</div>
						<div className="group shadow-md shadow-[#040c16] rounded-xl hover:scale-110 duration-500 bg-[#75604b] h-[8rem]">
							<img
								src="./src/assets/html.png"
								className="w-[3.5rem] mx-auto pt-4"
							/>
							<p className="pt-3 font-semibold group-hover:text-[#f06529] text-lg pb-3 duration-100">
								HTML
							</p>
						</div>
						<div className="group shadow-md shadow-[#040c16] rounded-xl hover:scale-110 duration-500 bg-[#75604b] h-[8rem]">
							<img
								src="./src/assets/css.png"
								className="w-[3.5rem] mx-auto pt-4"
							/>
							<p className="pt-3 font-semibold group-hover:text-[#2965f1] text-lg pb-3 duration-100">
								CSS
							</p>
						</div>
						<div className="group shadow-md shadow-[#040c16] rounded-xl hover:scale-110 duration-500 bg-[#75604b] h-[8rem]">
							<img
								src="./src/assets/react.png"
								className="w-[3.5rem] mx-auto pt-4"
							/>
							<p className="pt-3 font-semibold group-hover:text-[#61dbfb] text-lg pb-3 duration-100">
								REACT
							</p>
						</div>
					</div>
				</div>
				{/* FOR PROJECTS */}
				<div className="md:flex max-w-[1000px]  flex-col justify-center w-full  bg-">
					<div>
						<p className="text-4xl font-bold inline border-b-8 border-gray-800 ">
							Projects
						</p>
						<p className="pt-6 pb-2 font-semibold text-xl">
							Check out some of my recent work
						</p>
					</div>
					<div className="grid sm:auto-cols-fr md:grid-cols-3 gap-4 pt-6 ">
						{/* PROJECTS CARDS */}
						<div
							style={{ backgroundImage: "url(./src/assets/chores.jpeg)" }}
							className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
							{/* Hover Effects */}

							<div className="opacity-0 group-hover:opacity-80">
								<span className="text-2xl font-bold text-white tracking-wider">
									Chores-To-Do-List
								</span>
								<div className="pt-8 text-center">
									<a href="/">
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300">
											Demo
										</button>
									</a>
									<a href="/">
										{/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300">
											Code
										</button> */}
									</a>
								</div>
							</div>
						</div>
						<div
							style={{ backgroundImage: "url(./src/assets/date-calc.jpeg)" }}
							className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
							{/* Hover Effects */}

							<div className="opacity-0 group-hover:opacity-80">
								<span className="text-2xl font-bold text-white tracking-wider">
									Date Calculator
								</span>
								<div className="pt-8 text-center">
									<a href="/">
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300">
											Demo
										</button>
									</a>
									<a href="/">
										{/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300">
											Code
										</button> */}
									</a>
								</div>
							</div>
						</div>
						<div
							style={{ backgroundImage: "url(./src/assets/pizza.jpeg)" }}
							className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center ">
							{/* Hover Effects */}

							<div className="opacity-0 group-hover:opacity-80">
								<span className="text-2xl font-bold text-white tracking-wider">
									Pizza-Menu
								</span>
								<div className="pt-8 text-center">
									<a href="/">
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300">
											Demo
										</button>
									</a>
									<a href="/">
										{/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300">
											Code
										</button> */}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
