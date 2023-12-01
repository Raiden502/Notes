import { Box, Stack, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NAVDashboard = 280;

function NavVertical() {
	const renderContent = (
		<Box
			sx={{
				height: "100%",
				backgroundColor: "transparent",
				overflowY: "scroll",
			}}
		>
			<Stack
				sx={{
					padding: 2,
					border: "1px solid black",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						border: "1px solid black",
						width:220,
						height:100,
						textAlign:'center'
					}}
				>
					account
				</Box>
				{/* nav item */}
			</Stack>
		</Box>
	);
	return (
		<Box
			component="nav"
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAVDashboard },
			}}
		>
			<Drawer
				open
				variant="permanent"
				PaperProps={{
					sx: {
						zIndex: 0,
						width: NAVDashboard,
						bgcolor: "transparent",
						borderRightStyle: "dashed",
					},
				}}
			>
				{renderContent}
			</Drawer>
		</Box>
	);
}

export default NavVertical;
