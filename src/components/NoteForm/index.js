import React from "react";

import styles from "./NoteForm.module.css";

export default function NoteForm() {


  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <textarea
          placeholder="Enter your note here.."
          className={styles.noteText}
        ></textarea>
        <div className={styles.noteOptions}>
          <div>
            <span className={`${styles.pink} ${styles.colorChoice}`}>
            </span>
            <span className={`${styles.purple} ${styles.colorChoice}`}>
            </span>
            <span className={`${styles.yellow} ${styles.colorChoice}`}>
            </span>
            <span className={`${styles.blue} ${styles.colorChoice}`}>
            </span>
            <span className={`${styles.green} ${styles.colorChoice}`}>
            </span>
          </div>
          <button className={styles.addButton}>Add</button>
        </div>
      </form>
    </div>
  );
}
