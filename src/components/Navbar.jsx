// import React from "react";
import "./Navbar.css";
import { useState } from "react";
import LogoNanWhite from "../assets/logo-fe-nan.png";
// import { FaLinkedin } from "react-icons/fa";
import { Hammenu, Close } from "../assets/all-Icons";
import { SocMed } from "./data.jsx";
// import {BsFillPersonLinesFill} from "react-icons/bs"
// import { Hammenu, Close, LinkedIn } from "../assets/all-Icons";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	console.log(SocMed);
	const LinkSocMed = SocMed.map((index) => {
		const bgColor = `bg-${index.backgroundColor}`;
		return (
			<li
				className={`linked w-[215px] h-[80px] flex justify-around items-center ml-[-150px] rounded-[10px] hover:${bgColor}`}
				key={index.id}>
				<a
					href={index.link}
					className="text-[1.2rem] flex flex-row items-center justify-between w-full">
					{index.socialMedia} {index.logo}
				</a>
			</li>
		);
	});

	return (
		<div className="fixed">
			<div>
				<img
					className="px-8"
					src={LogoNanWhite}
					alt="logo-nan-white"
					style={{ width: "260px" }}
				/>
			</div>
			{/* Menu */}
			<ul className="list-desktop hidden md:flex gap-3">
				<li>About</li>
				<li>Experience</li>
				<li>Contact</li>
			</ul>
			{/* Hamburger */}
			<div onClick={handleClick} className="logo md:hidden z-10 cursor-pointer">
				{!nav ? <Hammenu /> : <Close />}
			</div>
			{/* Mobile Menu */}
			<ul
				className={
					nav
						? "list-mobile absolute top-0 left-0 w-full h-screen bg-[#746d69] flex flex-col justify-center items-center"
						: "hidden"
				}>
				<li className="py-6 text-4xl">About</li>
				<li className="py-6 text-4xl">Experience</li>
				<li className="py-6 text-4xl">Contact</li>
			</ul>
			{/* Social Icons */}
			{SocMed.length > 0 && (
				<div className="socSlide hidden md:flex fixed flex-row top-[35%] left-[0] pl-0 w-[60px] h-[400px]">
					<ul>{LinkSocMed}</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;

// w-full h-[80px] flex justify-between items-center px-4 bg-slate-500
