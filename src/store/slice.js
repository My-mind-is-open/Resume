import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
	name: 'note',
	initialState: {
		note: []
	},
	reducers: {
		removeNotes(state, action) {
			state.note = state.note.filter((e) => e.id !== action.payload);
			console.log(action)
			console.log(state.note)
		}
	}
});
export const { removeNotes } = noteSlice.actions;
export default noteSlice.reducer;