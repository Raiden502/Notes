import { useEffect, useState, useReducer, useRef } from "react";
import { useSelector, useDispatch } from "../../redux/store";
import {
	setNewNotes,
	setIsPublished,
	editNotes,
} from "../../redux/slices/Publish";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const initialState = {
	notesId: "",
	title: "",
	description: "",
	tags: [],
};

const RESET = "reset";
const NEWTITLE = "new_title";
const NEWDESC = "new_description";
const TAGS = "new_tags";

function reducer(state, action) {
	if (action.type === RESET) {
		return {
			...initialState,
		};
	}
	if (action.type === NEWTITLE) {
		if (state.notesId === "") {
			return {
				...state,
				notesId: uuidv4(),
				title: action.payload.title,
			};
		}
		return {
			...state,
			title: action.payload.title,
		};
	}
	if (action.type === NEWDESC) {
		if (state.notesId === "") {
			return {
				...state,
				notesId: uuidv4(),
				description: action.payload.description,
			};
		}
		return {
			...state,
			description: action.payload.description,
		};
	}
	if (action.type === TAGS) {
		if (state.notesId === "") {
			return {
				...state,
				notesId: uuidv4(),
				tags: action.payload.tags,
			};
		}
		return {
			...state,
			tags: action.payload.tags,
		};
	}
	throw Error("Unknown action.");
}

function PublishNewNote() {
	const dispatch = useDispatch();
	const publishState = useSelector((state) => state.publish);
	const [newNote, setNoteEvent] = useReducer(reducer, initialState);

	const handleTitleChange = (event) => {
		setNoteEvent({
			type: NEWTITLE,
			payload: { title: event.target.value },
		});
	};

	const handleDescChange = (event) => {
		setNoteEvent({
			type: NEWDESC,
			payload: { description: event.target.value },
		});
	};

	const editNewNote = async () => {
		const check = publishState.notes.some(
			(obj) => obj.notesId === newNote.notesId,
		);
		if (check) {
			dispatch(editNotes(newNote));
		} else {
			dispatch(setNewNotes(newNote));
		}
	};

	const publishNewNote = () => {
		if (newNote.notesId) {
			dispatch(setIsPublished({ notesId: newNote.notesId }));
		} else {
			dispatch(setNewNotes(newNote));
			dispatch(setIsPublished({ notesId: newNote.notesId }));
		}
		setNoteEvent({
			type: RESET,
		});
	};

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

export default PublishNewNote;
