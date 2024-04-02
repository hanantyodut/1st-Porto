const Abouts = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gray-800 z-40 text-gray-300">
			<div className="max-w-[1300px] mx-auto flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm: text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline-block border-b-4 border-[#ffd700]">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-12">
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
							<ul className="flex flex-col ">
								<li className="flex justify-between ">
									<div>
										<img src="./src/assets/logo-81.jpg" className="w-[100px]" />
									</div>
									<div>
										<p className="mt-4 text-lg font-semibold">
											SMAN 81 Jakarta Timur
										</p>
										<p className=" font-semibold">Class of Natural Science</p>
										<p className="italic font-semibold">2014-2016</p>
									</div>
								</li>
								<li className="flex justify-between ">
									<div>
										<img src="" />
									</div>
									<div>
										<p className="mt-4 text-lg font-semibold">
											SMAN 81 Jakarta Timur
										</p>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Abouts;
