import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {

	const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen)

	if(!isMenuOpen) return null;

	return (
		// w-48
		<div className="p-5 shadow-lg w-48">
			<h1 className="font-bold">Watch Later</h1>
			<ul className="cursor-pointer">
				<li>Shorts</li>
				<li><Link to="/">Home</Link></li>
				<li>Live</li>
				<li>Academy</li>
			</ul>
			<h1 className="font-bold pt-2">Subscriptions</h1>
			<ul className="cursor-pointer">
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
			<h1 className="font-bold pt-2">Videos</h1>
			<ul className="cursor-pointer">
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
		</div>
	);
};

export default Sidebar;
