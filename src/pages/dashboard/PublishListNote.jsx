import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "../../redux/store";
import { setNewNotes } from "../../redux/slices/Publish";
import { Box, Typography, Grid } from "@mui/material";

function PublishListNote() {
	const dispatch = useDispatch();
	const publishState = useSelector((state) => state.publish);
	console.log(publishState);
	return (
		<>
			<Box sx={{ border: "2px solid black", p: 2 }}>
				<Typography>Draft Notes</Typography>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container>
						{publishState.notes.map((state, index) =>
							state.isPublished === false ? (
								<Grid
									key={index}
									sx={{
										border: "1px solid black",
										padding: 3,
										width: 200,
									}}
								>
									<Box>
										<Typography>{state.title}</Typography>
										<Typography>
											{state.description}
										</Typography>
									</Box>
								</Grid>
							) : (
								<></>
							),
						)}
					</Grid>
				</Box>
				<Typography>Published Notes</Typography>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container>
						{publishState.notes.map(
							(state, index) =>
								state.isPublished === true && (
									<Grid
										key={index}
										sx={{
											border: "1px solid black",
											padding: 3,
											width: 200,
										}}
									>
										<Box>
											<Typography>
												{state.title}
											</Typography>
											<Typography>
												{state.description}
											</Typography>
										</Box>
									</Grid>
								),
						)}
					</Grid>
				</Box>
			</Box>
		</>
	);
}

export default PublishListNote;
