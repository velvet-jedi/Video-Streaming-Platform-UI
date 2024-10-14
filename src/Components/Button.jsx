import React from "react";

const Button = ({ category }) => {
	return (
		<div>
			<button className="px-4 py-2 m-2 font-bold bg-gray-100 cursor-pointer hover:bg-gray-300 focus:bg-black transition focus:text-white rounded-md ">{category}</button>
		</div>
	);
};

export default Button;
