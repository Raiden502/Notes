import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import SearchBar from "./Search";

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" >
				<Toolbar>
					<SearchBar />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
