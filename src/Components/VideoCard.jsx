import React from "react";

const VideoCard = ({ info }) => {
	
	const { statistics, snippet } = info;
	const { title, channelTitle, thumbnails } = snippet;
	const { viewCount } = statistics;
	return (
		<div className="p-2 cursor-pointer rounded-3xl hover:bg-slate-300  m-2 w-72 shadow-lg">
			<img
				src={thumbnails.high.url}
				className="rounded-3xl"
			/>
			<ul>
				<li className="font-bold py-2">{title}</li>
				<li>{channelTitle}</li>
				<li>{viewCount} views</li>
			</ul>
		</div>
	);
};

export default VideoCard;
