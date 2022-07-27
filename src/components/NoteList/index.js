import React from "react";
import styles from "./NoteList.module.css";
import { useSelector } from "react-redux";

import SingleNote from "../SingleNote.js";

export default function NoteList() {
  const noteList = useSelector((state) => state.notes.noteList);

  return (
    <div className={styles.noteList}>
      {noteList.map((item) => (
        <SingleNote key={item.id} color={item.color} note={item.note} />
      ))}
    </div>
  );
}
