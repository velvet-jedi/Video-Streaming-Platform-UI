import React from "react";

const ChatMessage = ({ name, message }) => {
	return (
		<>
			<div className="flex items-center shadow-sm p-2">
				<img
					className="h-8 hover:cursor-pointer"
					src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-solid-icon-121102166.jpg"
					alt="user"
				/>
				<span className="font-bold px-2">{name}</span>
				<span>{message}</span>
			</div>
		</>
	);
};

export default ChatMessage;
