import React from "react";
import Comment from "./Comment";

const commentsData = [
	{
		name: "Bahadur",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, commodi quis sunt vel necessitatibus deserunt sint dolorem perferendis ad at numquam atque iure amet deleniti adipisci illo aperiam ratione quasi.",
		replies: [],
	},
	{
		name: "Ayesha",
		text: "I totally agree with your point. It is important to focus on the core issue here.",
		replies: [
			{
				name: "Kiran",
				text: "I second that! The discussion needs to go deeper into the root causes.",
				replies: [
					{
						name: "Ali",
						text: "But don't you think we should also consider the side effects?",
						replies: [],
					},
				],
			},
			{
				name: "Saad",
				text: "I have a slightly different take on this. We need more data before jumping to conclusions.",
				replies: [],
			},
		],
	},
	{
		name: "Sohail",
		text: "Interesting conversation happening here. I feel there are many aspects we haven't explored yet.",
		replies: [
			{
				name: "Reema",
				text: "Yes, especially regarding the economic impact. It's often overlooked.",
				replies: [],
			},
		],
	},
	{
		name: "Nida",
		text: "Can anyone provide some statistics or references? It would be helpful for a well-rounded discussion.",
		replies: [],
	},
	{
		name: "Zain",
		text: "I just found a great article that sheds light on this issue. Sharing it here!",
		replies: [
			{
				name: "Tariq",
				text: "Thanks for sharing, Zain! This really adds to the conversation.",
				replies: [],
			},
		],
	},
];

const CommentsContainer = ({ comments }) => {
	return (
		<div className="ml-4 p-2">
			{comments.map((comment, index) => (
				<div key={index}>
					<Comment data={comment} />
					{comment.replies.length > 0 && (
						<div className="pl-5 border border-l-black ml-5">
							<CommentsContainer comments={comment.replies} />
						</div>
					)}
				</div>
			))}
		</div>
	);
};
const MainCommentsContainer = () => {
	return (
		<div>
			<h1 className="ml-4 text-2xl font-bold">Comments</h1>
			<CommentsContainer comments={commentsData} />
		</div>
	);
};

export default MainCommentsContainer;
