import { Box, Typography, Grid, Button } from "@mui/material";
import { PropTypes } from "prop-types";
import { memo } from "react";

const ListNotes = memo(function ListNotes({ notesArray, publishNewNote }) {
	return (
		<>
			<Box sx={{ border: "2px solid black", p: 2 }}>
				<Typography>Draft Notes</Typography>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container>
						{notesArray.map((state, index) =>
							state?.isPublished === false ? (
								<Grid
									key={index}
									sx={{
										border: "1px solid black",
										padding: 3,
										width: 200,
									}}
								>
									<Box>
										<Typography>{state?.title}</Typography>
										<Typography>
											{state?.description}
										</Typography>
										<Button
											variant="contained"
											name = {state?.notesId}
											onClick={(event) => {
												publishNewNote(event);
											}}
										>
											publish
										</Button>
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
						{notesArray.map(
							(state, index) =>
								state?.isPublished === true && (
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
												{state?.title}
											</Typography>
											<Typography>
												{state?.description}
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
});

ListNotes.propTypes = {
	notesArray: PropTypes.array,
	publishNewNote: PropTypes.func,
};

export default ListNotes;
