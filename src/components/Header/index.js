import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchInputChanged } from "../../redux/notes/notesSlice";

import styles from "./Header.module.css";

export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    dispatch(searchInputChanged(value));
}

  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>NotesApp</h1>
      <form>
        <input
          placeholder="Search.."
          className={styles.searchInput}
          value={input}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </header>
  );
}
