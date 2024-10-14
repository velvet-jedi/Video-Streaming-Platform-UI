import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<div className="grid grid-flow-col">
			{/* the sidebar and head both need to avail the toggling behavior of hamburger icon on every page of youtube, so best way to make a state of hamburger icon available is not to make a state variable but make a hamburger slice in a redux store - CENTRAL STATE MNGMNT */}
			<Sidebar></Sidebar>
			{/* <MainContainer></MainContainer> */}
			<Outlet></Outlet>
		</div>
	);
};

export default Body;
