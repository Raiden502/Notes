import { Navigate, useRoutes } from "react-router-dom";

import { DashBoardLayout, PublishListNote, PublishNewNote, SupportChatting } from "./elements.jsx";

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
				{
					path:'/chat',
					element: <SupportChatting />,
				},
			],
		},
	]);
}

export default Router;
