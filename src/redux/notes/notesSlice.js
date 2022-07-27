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
        selectedColor: "",
        searchInput : "",
    },
    reducers: {
        noteAdded: (state, action) => {
            state.noteList.push(action.payload);
        },
        colorChanged: (state, action) => {
            state.selectedColor = action.payload;
        },
        searchInputChanged: (state, action) => {
            state.searchInput = action.payload;
        }
    }
});

export const filteredNotes = (state) => {
    if(state.notes.searchInput) {
        const filtered = state.notes.noteList.filter(item => item.note.toLowerCase().indexOf(state.notes.searchInput.toLowerCase()) > -1);
        return filtered;
    }
    return state.notes.noteList;
}

export const {noteAdded, colorChanged, searchInputChanged} = notesSlice.actions;
export default notesSlice.reducer;