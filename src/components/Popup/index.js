import {useState} from "react";
import { useDispatch } from "react-redux";
import {changePopupStatus, noteEdited} from "../../redux/notes/notesSlice";

import styles from "./Popup.module.css";

export default function Popup({id}) {
    const [note, setNote] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => setNote(e.target.value);

    const closePopup = () => {
        dispatch(changePopupStatus());
    }

    const handleSubmit = (e) => {
        dispatch(noteEdited({id:id, newNote:note}));
        dispatch(changePopupStatus());
        e.preventDefault();
        console.log(id);
    }

    return (
        <div className={styles.popupContainer}>
            <div className={styles.header}>
                <h3>Edit Note</h3>
                <button className={styles.closeBtn} onClick={() => closePopup()}>X</button>
            </div>
            <form className={styles.body}>
                <textarea placeholder="Enter your new note.." value={note} onChange={(e) => handleChange(e)} className={styles.textArea}>
                </textarea>
            </form>
            <div className={styles.footer}>
                <button type="submit" className={styles.saveBtn} onClick={(e) => handleSubmit(e)}>Save</button>
            </div>
        </div>
    );
}