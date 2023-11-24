import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
	(
		<Suspense fallback={<>Loading</>}>
			<Component {...props} />
		</Suspense>
	);

export const DashBoardLayout = Loadable(
	lazy(() => import("../layouts/dashboard/DashboardLayout.jsx")),
);

export const PublishNewNote = Loadable(
	lazy(() => import("../pages/dashboard/PublishNewNote.jsx")),
);

export const PublishListNote = Loadable(
	lazy(() => import("../pages/dashboard/PublishListNote.jsx")),
);

export const SupportChatting = Loadable(
	lazy(() => import("../pages/dashboard/chat.jsx")),
);
