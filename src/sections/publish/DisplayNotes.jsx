import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "src/redux/store";
import { setIsPublished } from "src/redux/slices/Publish";
import ListNotes from "./listNotes";

function PublishListParent() {
	const dispatch = useDispatch();
	const publishState = useSelector((state) => state.publish);

	const memoized = useMemo(() => {
		return { notesArray: publishState?.notes };
	}, [publishState]);

	const publishNewNote = (event) => {
		console.log("publish")
		const notesId = event.target.name
		const check = publishState.notes.some((obj) => obj?.notesId === notesId);
		if (check) {
			dispatch(setIsPublished({ notesId: notesId }));
		}
	};


	return (
		<ListNotes
			notesArray={memoized.notesArray}
			publishNewNote={publishNewNote}
		/>
	);
}

export default PublishListParent;
