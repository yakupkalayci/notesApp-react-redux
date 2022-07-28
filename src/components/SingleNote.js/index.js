import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteDeleted, changePopupStatus } from "../../redux/notes/notesSlice";
import "./SingleNote.css";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import Popup from "../Popup";

export default function SingleNote({ color, note, id }) {
  const dispatch = useDispatch();
  const showPopup = useSelector(state => state.notes.showPopup);

  const handleDelete = (id) => {
    dispatch(noteDeleted({ id }));
  };

  const handleEdit = () => {
    dispatch(changePopupStatus());
    console.log(id);
  }

  return (
    <div className={`${color} item`}>
      <p>{note}</p>
      <div className="icons">
        <RiEdit2Line className="iconEdit icon" onClick={() => handleEdit()}/>
        <RiDeleteBinLine className="icon" onClick={() => handleDelete(id)} />
      </div>
      {
        showPopup && <Popup id={id}/>
      }
    </div>
  );
}
