import "./App.css";
import Head from "./Components/Head";
// import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainContainer from "./Components/MainContainer";
// import WatchPage from "./Components/WatchPage";
import { Suspense, lazy } from "react";

const Body = lazy(() => import("./Components/Body"));
const MainContainer = lazy(() => import("./Components/MainContainer"));
const WatchPage = lazy(() => import("./Components/WatchPage"));

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "watch",
				element: <WatchPage />,
			},
		],
	},
	{
		path: "/watch",
		element: <Body />,
	},
]);

function App() {
	return (
		<>
			<Provider store={store}>
				<div>
					<Head></Head>
					<Suspense fallback={<div>Loading...</div>}>
						<RouterProvider router={appRouter} />
					</Suspense>
				</div>
			</Provider>
		</>
	);
}

export default App;
