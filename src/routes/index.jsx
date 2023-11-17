import { Navigate, useRoutes } from "react-router-dom";

import { DashBoardLayout, PublishListNote, PublishNewNote } from "./elements.jsx";

function Router() {
	return useRoutes([
		{
			path: "/",
			element: <DashBoardLayout />,
			children: [
				{
					index: true,
					element: <PublishNewNote />,
				},
				{
					path:'/list',
					element: <PublishListNote />,
				},
			],
		},
	]);
}

export default Router;
