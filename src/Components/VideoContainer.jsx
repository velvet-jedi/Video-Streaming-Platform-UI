import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_API);
		const data_json = await data.json();
		setVideos(data_json.items);
	};

	return (
		<div className="flex flex-wrap my-0 mx-auto">
			{videos.map((video) => (
				<Link key={video.id} to={"/watch?v=" + video.id}>
					<VideoCard
						info={video}
						
					></VideoCard>
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
