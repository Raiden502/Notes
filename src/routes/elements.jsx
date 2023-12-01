import { Suspense, lazy } from 'react';

const Loadable = (Component) => (props) =>
	(
		<Suspense fallback={<>Loading</>}>
			<Component {...props} />
		</Suspense>
	);

export const DashBoardLayout = Loadable(
	lazy(() => import('src/layouts/dashboard/DashboardLayout.jsx')),
);

export const Posts = Loadable(
	lazy(()=>import('src/pages/dashboard/Posts.jsx'))
)
export const PublishNewNote = Loadable(
	lazy(() => import('src/pages/dashboard/PublishNewNote.jsx')),
	);

export const PublishListNote = Loadable(
	lazy(() => import('src/pages/dashboard/PublishListNote.jsx')),
	);

export const SupportChatting = Loadable(
	lazy(() => import('src/pages/dashboard/chat.jsx')),
);

// authentication
export const LoginPage = Loadable(
	lazy(()=>import('src/pages/authentication/LoginPage.jsx'))
)

export const RegisterPage = Loadable(
	lazy(()=>import('src/pages/authentication/RegisterPage.jsx'))
)

export const VerifyCode = Loadable(
	lazy(()=>import('src/pages/authentication/VerifyCodePage.jsx'))
)


// extras
export const AboutPage = Loadable(
	lazy(()=>import('src/pages/extras/AboutPage.jsx'))
	)

export const ComingSoonPage = Loadable(
	lazy(()=>import('src/pages/extras/ComingSoon.jsx'))
	)
export const ContactPage = Loadable(
	lazy(()=>import('src/pages/extras/ContactPage.jsx'))
	)
export const FaqsPage = Loadable(
	lazy(()=>import('src/pages/extras/FaqsPage.jsx'))
	)
export const MailUnsubscribePage = Loadable(
	lazy(()=>import('src/pages/extras/MailUnsubscribe.jsx'))
	)
export const MaintenancePage = Loadable(
	lazy(()=>import('src/pages/extras/MaintenancePage.jsx'))
	)
export const Page403 = Loadable(
	lazy(()=>import('src/pages/extras/Page403.jsx'))
	)
export const Page404 = Loadable(
	lazy(()=>import('src/pages/extras/Page404.jsx'))
	)
export const Page500 = Loadable(
	lazy(()=>import('src/pages/extras/Page500.jsx'))
	)



