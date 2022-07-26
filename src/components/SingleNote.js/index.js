import React from "react"
import "./SingleNote.css";

export default function SingleNote({color, note}) {

    return (
        <div className={`${color} item`}>
            <p>{note}</p>
        </div>
    )
}