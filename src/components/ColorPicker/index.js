import React from "react";
import { useDispatch } from "react-redux";
import {colorChanged} from "../../redux/notes/notesSlice";

import "./styles.css";

export default function ColorPicker({ color, selectedColor }) {
  const dispatch = useDispatch();

  const changeSelectedColor = (e) => {
    const color = e.target.id;
    dispatch(colorChanged({color}));
  };

  return (
    <span
      id={color}
      className={`colorPicker ${color}`}
      style={selectedColor.color === color ? { opacity:"0.5", border:"1px solid black" } : {}}
      onClick={(e) => changeSelectedColor(e)}
    ></span>
  );
}
