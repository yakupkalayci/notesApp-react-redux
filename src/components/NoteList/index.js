import React from "react";
import styles from "./NoteList.module.css";
import { useSelector } from "react-redux";
import {filteredNotes} from "../../redux/notes/notesSlice";

import SingleNote from "../SingleNote.js";

export default function NoteList() {
  const filteredNoteList = useSelector(filteredNotes);

  return (
    <div className={styles.noteList}>
      {filteredNoteList.map((item) => (
        <SingleNote key={item.id} color={item.color} note={item.note} />
      ))}
    </div>
  );
}
