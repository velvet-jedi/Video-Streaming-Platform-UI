import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Live",
	"News",
	"Football",
	"Valentine",
	"Music",
	"Landing",
	"JRE",
	"Israel",
	"Russia",
	"Dance",
	"Love",
	"Art",
	"Gaming",
	"Roadrage",
	"Guns",
	"Gym",
	"Safety",
	"Noida",
	"Growth",
];

const ButtonsList = () => {
	return (
		<div className="flex py-4 w-[80rem] mx-auto overflow-scroll">
			{list.map((category, index) => (
				<Button
					
					key={index}
					category={category}
				></Button>
			))}
		</div>
	);
};

export default ButtonsList;
