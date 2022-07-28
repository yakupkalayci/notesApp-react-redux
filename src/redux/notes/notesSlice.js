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
        showPopup: false
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
        },
        noteDeleted: (state, action) => {
            const id = action.payload.id;
            state.noteList = state.noteList.filter(note => note.id !== id);
        },
        noteEdited: (state, action) => {
            const {id, newNote} = action.payload;
            state.noteList = state.noteList.map(item => item.id === id ? {...item, note:newNote} : item)
        },
        changePopupStatus: (state) => {
            state.showPopup = !state.showPopup;
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

export const {noteAdded, colorChanged, searchInputChanged, noteDeleted, noteEdited, changePopupStatus} = notesSlice.actions;
export default notesSlice.reducer;