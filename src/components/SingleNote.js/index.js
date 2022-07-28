import React from "react"
import { useDispatch } from "react-redux";
import {noteDeleted} from "../../redux/notes/notesSlice";
import "./SingleNote.css";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

export default function SingleNote({color, note, id}) {
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(noteDeleted({id}));
    }

    return (
        <div className={`${color} item`}>
            <p>{note}</p>
            <div className="icons">
                <RiEdit2Line className="iconEdit icon" />
                <RiDeleteBinLine className="icon" onClick={() => handleClick(id)}/>
            </div>
        </div>
    )
}