import {createSlice, nanoid} from "@reduxjs/toolkit";

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
        noteList: []
    },
    reducers: {}
});


export default notesSlice.reducer;