import React from "react"

import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>NotesApp</h1>
            <form>
                <input placeholder="Search.." className={styles.searchInput}/>
            </form>
        </header>
    )
}