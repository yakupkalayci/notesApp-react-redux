import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteAdded } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";
import ColorPicker from "../ColorPicker";

import styles from "./NoteForm.module.css";

export default function NoteForm() {
  const colors = ["pink", "green", "yellow", "blue", "purple"];
  const selectedColor = useSelector(state => state.notes.selectedColor);

  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const color = selectedColor.color;
    dispatch(noteAdded({id: nanoid(), color, note}));
    setNote("");
  }

  const handleTextInput = (e) => {
    setNote(e.target.value);
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your note here.."
          className={styles.noteText}
          value={note}
          onChange={(e) => handleTextInput(e)}
        ></textarea>
        <div className={styles.noteOptions}>
          <div>
            {
              colors.map(color => <ColorPicker key={color} color={color} selectedColor={selectedColor} />)
            }
          </div>
          <button className={styles.addButton} type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
