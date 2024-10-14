import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/hamburgerSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./MainCommentsContainer";
import LiveChat from "./LiveChat";
// make isMenuOpen available here
const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<>
			<div className="flex flex-col w-full">
				<div className="px-5 flex  w-full">
					<div>
						<iframe
							width="1088"
							height="600"
							src={
								"https://www.youtube.com/embed/" +
								searchParams.get("v")
							}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</div>
					<div className="w-full">
						<LiveChat />
					</div>
				</div>
				{/* component for displaying video and channel details like share etc... */}

				<CommentsContainer />
			</div>
		</>
	);
};

export default WatchPage;
