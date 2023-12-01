import { Box, Typography, TextField, Stack, Button, MenuItem, Select } from "@mui/material";
import { PropTypes } from "prop-types";

InputNewNotes.propTypes = {
	handleTitleChange: PropTypes.func,
	handleDescChange: PropTypes.func,
	editNewNote: PropTypes.func,
	publishNewNote: PropTypes.func,
	newNote: PropTypes.obj,
};

function InputNewNotes({
	handleTitleChange,
	handleDescChange,
	editNewNote,
	publishNewNote,
	newNote,
}) {
	return (
		<>
			<Box sx={{ border: "2px solid black", p: 2 }}>
				<Typography>New Note</Typography>
				<Stack>
					<TextField
						value={newNote.title}
						placeholder="Title"
						onChange={handleTitleChange}
					></TextField>
					<TextField
						value={newNote.description}
						placeholder="Description"
						onChange={handleDescChange}
					></TextField>
					<Stack direction="row" gap={2} padding={2}>
						<Button variant="contained" onClick={editNewNote}>
							save
						</Button>
						<Button variant="contained" onClick={publishNewNote}>
							publish
						</Button>
					</Stack>
				</Stack>
			</Box>
		</>
	);
}

export default InputNewNotes;
