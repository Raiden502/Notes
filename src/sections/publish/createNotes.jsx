import {
	useEffect,
	useState,
	useReducer,
	useRef,
	useContext,
	useCallback,
} from "react";
import { useSelector, useDispatch } from "src/redux/store";
import {
	setNewNotes,
	setIsPublished,
	editNotes,
} from "src/redux/slices/Publish";

import { v4 as uuidv4 } from "uuid";
import InputNewNotes from "./InputNewNotes";
import { SnackBarContext } from "src/providers/snackbar/SnackbarContext";

const initialState = {
	notesId: "",
	title: "",
	description: "",
	tags: [],
	delay: 0,
};

const RESET = "reset";
const NEWTITLE = "new_title";
const NEWDESC = "new_description";
const TAGS = "new_tags";
const DELAY = "delay";

function reducer(state, action) {
	if (action.type === DELAY) {
		return {
			...state,
			delay: action.payload.delay,
		};
	}
	if (action.type === RESET) {
		return {
			...initialState,
		};
	}
	if (action.type === NEWTITLE) {
		if (state.notesId === "") {
			const ts = Math.floor(Date.now() / 1000).toString();
			return {
				...state,
				notesId: ts,
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
			const ts = Math.floor(Date.now() / 1000).toString();
			return {
				...state,
				notesId: ts,
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

function NewNotes() {
	const dispatch = useDispatch();
	const publishState = useSelector((state) => state.publish);
	const { scheduleNotificationEvent } = useContext(SnackBarContext);
	const [newNote, setNoteEvent] = useReducer(reducer, initialState);

	const handleTitleChange = useCallback((event) => {
		setNoteEvent({
			type: NEWTITLE,
			payload: { title: event.target.value },
		});
	}, []);

	const handleDescChange = useCallback((event) => {
		setNoteEvent({
			type: NEWDESC,
			payload: { description: event.target.value },
		});
	}, []);

	const editNewNote = useCallback(() => {
		const check = publishState.notes.some(
			(obj) => obj?.notesId === newNote.notesId,
		);
		console.log(check)
		if (check) {
			dispatch(editNotes(newNote));
		} else {
			dispatch(setNewNotes(newNote));
		}
		scheduleNotificationEvent({
			severity: "success",
			body: "Saved Succesfull",
			customDelay: newNote.delay,
		});
	}, [newNote]);

	const publishNewNote = useCallback(() => {
		const check = publishState.notes.some(
			(obj) => obj?.notesId === newNote.notesId,
			);
		if (check) {
			dispatch(setIsPublished({ notesId: newNote.notesId }));
			scheduleNotificationEvent({
				severity: "success",
				body: "Published Succesfull",
			});
		} else {
			console.log("new note", newNote)
			dispatch(setNewNotes(newNote));
			console.log("set note", newNote)
			dispatch(setIsPublished({ notesId: newNote.notesId }));
			scheduleNotificationEvent({
				severity: "warning",
				body: "Published Succesfull",
				// customDelay: newNote.delay,
			});
		}
		setNoteEvent({
			type: RESET,
		});
	},[newNote])

	console.log("notes", publishState)
	return (
		<>
			<InputNewNotes
				handleTitleChange={handleTitleChange}
				handleDescChange={handleDescChange}
				editNewNote={editNewNote}
				publishNewNote={publishNewNote}
				newNote={newNote}
			/>
		</>
	);
}

export default NewNotes;
