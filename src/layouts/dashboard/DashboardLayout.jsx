import { Outlet } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import MainLayout from "./Main";
import Header from "./header/Header";
import NavHorizontal from "src/dashboard/navigation/NavHorizontal";
import NavVertical from "src/dashboard/navigation/NavVertical";

function DashBoardLayout() {
	const isSmallScreen = useMediaQuery("(max-width:600px)");
	return (
		<>
			<Header />
			{isSmallScreen ? <NavVertical /> : <NavHorizontal />}
			<MainLayout>
				<Outlet />
			</MainLayout>
		</>
	);
}

export default DashBoardLayout;
