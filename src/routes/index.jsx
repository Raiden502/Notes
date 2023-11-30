import { Navigate, useRoutes } from "react-router-dom";

import {
    AboutPage, ComingSoonPage, ContactPage,
    DashBoardLayout, FaqsPage,
    LoginPage, MailUnsubscribePage, MaintenancePage, Page403, Page404, Page500,
    Posts,
    PublishListNote,
    PublishNewNote,
    RegisterPage,
    SupportChatting, VerifyCode
} from "./elements.jsx";


function Router() {
	return useRoutes([
		{
			path:'/',
			element: <Navigate to="/auth/login" />,
		},
		{
			path:'/auth',
			children:[
				{
					path: 'login',
					element: <LoginPage />,
				},
				{
					path: 'register',
					element: <RegisterPage />,
				},
				{
					path: 'verify',
					element: <VerifyCode />,
				},
			]
		},
		{
			path: "/dashboard",
			element: <DashBoardLayout />,
			children: [
				{
					index: true,
					element: <Posts />,
				},
				{
					path: 'newnotes',
					element: <PublishNewNote />,
				},
				{
					path:'list',
					element: <PublishListNote />,
				},
				{
					path:'chat',
					element: <SupportChatting />,
				},
			],
		},
		{
			path: '/about-us',
			element: <AboutPage />,
		},
		{
			path: '/coming-soon',
			element: <ComingSoonPage />,
		},
		{
			path: '/contact-us',
			element: <ContactPage />,
		},
		{
			path: '/faqs',
			element: <FaqsPage />,
		},
		{
			path: '/mail-unsubscribe',
			element: <MailUnsubscribePage />,
		},
		{
			path: '/maintenance',
			element: <MaintenancePage />,
		},
		{
			path: '/403',
			element: <Page403 />,
		},
		{
			path: '/404',
			element: <Page404 />,
		},
		{
			path: '/500',
			element: <Page500 />,
		},
	]);
}

export default Router;
