const Abouts = () => {
	return (
		<div
			name="About"
			className="w-full h-screen bg-gray-800 z-40 text-gray-300">
			<div className="max-w-[1300px] mx-auto flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-4 pl-4">
						<p className="text-4xl font-bold inline-block border-b-4 border-[#ffd700]">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-4">
					<div className="sm:text-right text-3xl font-bold ">
						<p>Hi. My name is Hanantyo Dian Utomo, you can call me Hanang!</p>
					</div>
					<div>
						<p>
							Im a 25 years old bachelor graduate and has 2.5 years work
							experiences. I am passionate to dive into the world of web
							development and be ready to adapt for the innovation in the
							future!
						</p>
					</div>
				</div>
				<div className="max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right">
						<p className="text-2xl font-bold inline-block border-b-4 border-[#ffd700]">
							Education
						</p>
						<div className="w-full">
							<ul className="flex flex-col mt-6">
								<li className="flex justify-between">
									<div className="ml-[36px]">
										<img
											src="/src/assets/colored-ugm.png"
											className="w-[90px]"
										/>
									</div>
									<div>
										<p className=" text-lg font-semibold">
											Gadjah Mada University
										</p>
										<p className=" font-semibold">Mechanical Engineering</p>
										<p className="italic font-semibold">2016-2020</p>
									</div>
								</li>
								<li className="flex justify-between mt-4">
									<div className="ml-8">
										<img src="/src/assets/logo-81.jpg" className="w-[100px]" />
									</div>
									<div>
										<p className="mt-4 text-lg font-semibold">
											SMAN 81 Jakarta Timur
										</p>
										<p className=" font-semibold">Class of Natural Science</p>
										<p className="italic font-semibold">2014-2016</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<p className="text-2xl font-bold inline-block border-b-4 border-[#ffd700]">
							Previous Work Experience
						</p>
						<div className="w-full">
							<ul className="flex flex-col mt-2">
								<li className="flex justify-between ">
									<div>
										<p className="mt-4 text-lg font-semibold">
											Elsewedy Electric Indonesia
										</p>
										<p className=" font-semibold">
											Jr. Quality Engineer - Metal Part
										</p>
										<p className="italic font-semibold">2022-2024</p>
									</div>
									<div className="ml-8">
										<img
											src="/src/assets/logo-elsewedy.jpg"
											className="w-[130px] mt-4"
										/>
									</div>
								</li>
								<li className="flex justify-between mt-4">
									<div>
										<p className="mt-4 text-lg font-semibold">
											Ohgishi Indonesia
										</p>
										<p className=" font-semibold">PPIC Staff</p>
										<p className="italic font-semibold">2021-2022</p>
									</div>
									<div className="ml-[36px]">
										<img
											src="/src/assets/ohgishi-2.png"
											className="w-[100px] pt-4 mr-4"
										/>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Abouts;
