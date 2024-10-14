import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/hamburgerSlice";
import { YOUTUBE_SUGGEST_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";


const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [show, setShow] = useState(false);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SUGGEST_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1] || []);
	};

	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	const searchCache = useSelector((store) => store.search);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions().then(() => {
					dispatch(
						cacheResults({
							[searchQuery]: suggestions,
						})
					);
				});
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	return (
		<div className="grid grid-flow-col p-5 shadow-lg m-2">
			<div className="flex col-span-1 items-center">
				<img
					className="h-5 mx-3 hover:cursor-pointer"
					onClick={toggleMenuHandler}
					src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"
					alt="menu"
				/>
				<a href="/">
					<img
						className="h-10 w-20 hover:cursor-pointer"
						src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
						alt="logo"
					/>
				</a>
			</div>

			<div className="col-span-10 text-center relative">
				<input
					className="w-1/2 pl-4 border rounded-l-full border-gray-400 p-2"
					type="text"
					placeholder="Search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onFocus={() => setShow(true)}
					onBlur={() => setShow(false)}
				/>
				<button className="bg-gray-100 border rounded-r-full border-gray-400 p-2">
					🔍
				</button>

				{show && suggestions.length > 0 && (
					<div className="absolute p-2 mt-1 left-[24%] top-full w-1/2 bg-white border border-gray-300 rounded-2xl shadow-lg z-10">
						<ul>
							{suggestions.map((item, index) => (
								<li
									key={item + index}
									className="p-2 hover:bg-gray-100 hover:rounded-md transition-all text-left cursor-pointer"
								>
									🔍 {item}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div>
				<img
					className="h-8 hover:cursor-pointer"
					src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-solid-icon-121102166.jpg"
					alt="user"
				/>
			</div>
		</div>
	);
};

export default Head;
