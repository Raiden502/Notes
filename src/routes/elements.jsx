import { Suspense, lazy } from 'react';

const Loadable = (Component) => (props) =>
	(
		<Suspense fallback={<>Loading</>}>
			<Component {...props} />
		</Suspense>
	);

export const DashBoardLayout = Loadable(
	lazy(() => import('../layouts/dashboard/DashboardLayout.jsx')),
);

export const Posts = Loadable(
	lazy(()=>import('../pages/dashboard/Posts.jsx'))
)
export const PublishNewNote = Loadable(
	lazy(() => import('../pages/dashboard/PublishNewNote.jsx')),
	);

export const PublishListNote = Loadable(
	lazy(() => import('../pages/dashboard/PublishListNote.jsx')),
	);

export const SupportChatting = Loadable(
	lazy(() => import('../pages/dashboard/chat.jsx')),
);

// authentication
export const LoginPage = Loadable(
	lazy(()=>import('../pages/authentication/LoginPage.jsx'))
)

export const RegisterPage = Loadable(
	lazy(()=>import('../pages/authentication/RegisterPage.jsx'))
)

export const VerifyCode = Loadable(
	lazy(()=>import('../pages/authentication/VerifyCodePage.jsx'))
)


// extras
export const AboutPage = Loadable(
	lazy(()=>import('../pages/extras/AboutPage.jsx'))
	)

export const ComingSoonPage = Loadable(
	lazy(()=>import('../pages/extras/ComingSoon.jsx'))
	)
export const ContactPage = Loadable(
	lazy(()=>import('../pages/extras/ContactPage.jsx'))
	)
export const FaqsPage = Loadable(
	lazy(()=>import('../pages/extras/FaqsPage.jsx'))
	)
export const MailUnsubscribePage = Loadable(
	lazy(()=>import('../pages/extras/MailUnsubscribe.jsx'))
	)
export const MaintenancePage = Loadable(
	lazy(()=>import('../pages/extras/MaintenancePage.jsx'))
	)
export const Page403 = Loadable(
	lazy(()=>import('../pages/extras/Page403.jsx'))
	)
export const Page404 = Loadable(
	lazy(()=>import('../pages/extras/Page404.jsx'))
	)
export const Page500 = Loadable(
	lazy(()=>import('../pages/extras/Page500.jsx'))
	)



