import {createSlice} from "@reduxjs/toolkit";

const initialNoteList = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

const notesSlice = createSlice({
    name: "todos",
    initialState: {
        noteList: initialNoteList,
        selectedColor: "",
        searchInput : "",
        showPopup: false,
        currentID: "",
    },
    reducers: {
        noteAdded: (state, action) => {
            state.noteList.push(action.payload);
            localStorage.setItem("notes", JSON.stringify(state.noteList));
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
            localStorage.setItem("notes", JSON.stringify(state.noteList));
        },
        noteEdited: (state, action) => {
            const {id, newNote} = action.payload;
            // state.noteList = state.noteList.map(item => item.id === id ? {...item, note:newNote} : item);
            const editedNote = state.noteList.find(item => item.id === id);
            editedNote.note = newNote;
        },
        changePopupStatus: (state) => {
            state.showPopup = !state.showPopup;
        }, 
        changeCurrentID: (state, action) => {
            state.currentID = action.payload;
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

export const {noteAdded, colorChanged, searchInputChanged, noteDeleted, noteEdited, changePopupStatus, changeCurrentID} = notesSlice.actions;
export default notesSlice.reducer;