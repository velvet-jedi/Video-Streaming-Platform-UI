import ChatMessage from "./ChatMessage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
	const dispatch = useDispatch();

	const chatMessages = useSelector((state) => state.chat.messages);

	const [liveMessage, setLiveMessage] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			// console.log("Polling...");
			dispatch(
				addMessage({
					name: "Future Employee",
					message: "LightSpeed, Godspeed",
				})
			);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="overflow-y-scroll ml-2 w-full h-[600px] p-2 bg-slate-200 rounded-lg border border-black flex flex-col-reverse">
				<div className="">
					{chatMessages.map((c, index) => {
						return (
							<ChatMessage
								className=""
								key={index}
								name={c.name}
								message={c.message}
							/>
						);
					})}
				</div>
			</div>

			<form
				className="w-full flex p-2 ml-2 border border-black"
				onSubmit={(e) => {
					e.preventDefault();
					// console.log(liveMessage);
					dispatch(
						addMessage({
							name: "New Message", // Name of the user submitting the message
							message: liveMessage, // The message input by the user
						})
					);

					setLiveMessage(""); // Clear input after sending
				}}
			>
				<input
					className="w-96 bg-slate-300 rounded-lg px-3 mx-2"
					type="text"
					value={liveMessage}
					onChange={(e) => setLiveMessage(e.target.value)}
				/>
				<button className="bg-blue-500 py-1 px-2 rounded">
					Submit
				</button>
			</form>
		</>
	);
};

export default LiveChat;
