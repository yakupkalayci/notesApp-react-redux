import {createSlice} from "@reduxjs/toolkit";

// const notes = [
//     {
//         id: 1,
//         note: "deneme",
//         color: "yellow"
//     },
//     {
//         id: 2,
//         note: "deneme2",
//         color: "pink"
//     },
//     {
//         id: 3,
//         note: "deneme3",
//         color: "blue"
//     }
// ];

const notesSlice = createSlice({
    name: "todos",
    initialState: {
        noteList: [],
        selectedColor: ""
    },
    reducers: {
        noteAdded: (state, action) => {
            state.noteList.push(action.payload);
        },
        colorChanged: (state, action) => {
            state.selectedColor = action.payload;
        }
    }
});

export const {noteAdded, colorChanged} = notesSlice.actions;
export default notesSlice.reducer;