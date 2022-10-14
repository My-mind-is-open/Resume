import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './slice';



export const store = configureStore({
	reducer: {
		notes: noteReducer,
	}
});