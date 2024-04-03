const Contactme = () => {
	return (
		<div
			name="Contact"
			className="w-full h-screen bg-gray-800 flex justify-center items-center p-4">
			<form
				method="POST"
				action="https://getform.io/f/eapdneza"
				className="flex flex-col max-w-[600px] w-full items-center">
				<div className="pb-8 w-full">
					<p className="text-4xl font-bold- inline border-b-4 border-white text-gray-300">
						Contact me right here
					</p>
					<p className="text-gray-300 py-4">Submit your message below!</p>
				</div>
				<input
					className="bg-[#f2d1ae] p-2 rounded-lg w-full"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#f2d1ae] rounded-lg w-full"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#f2d1ae] p-2 rounded-lg w-full"
					name="message"
					rows={10}
					placeholder="message"></textarea>
				<button className="text-white border-2 border-solid border-[#ffd700] rounded-lg w-[10rem] mt-4 h-[3rem] hover:text-white font-semibold duration-300 hover:bg-[#746d69] hover:border-white">
					contact me!
				</button>
			</form>
		</div>
	);
};

export default Contactme;
