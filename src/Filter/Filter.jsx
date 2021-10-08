import React from "react";
import "../style.css";
import { editFilter } from "../redux/Filter/slices";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);
  localStorage.setItem("filter", filter);

  const handleEditFilter = (filter) => dispatch(editFilter({ filter }));

  return (
    <ul className="todos__filters">
      <li className="filter">
        <button
          className={`button filter__button all ${
            filter === "" ? "current" : ""
          }`}
          onClick={() => handleEditFilter("")}
        >
          All
        </button>
      </li>
      <li className="filter">
        <button
          className={`button filter__button completed ${
            filter === "todos_completed" ? "current" : ""
          }`}
          onClick={() => handleEditFilter("todos_completed")}
        >
          Completed
        </button>
      </li>
      <li className="filter">
        <button
          className={`button filter__button incompleted ${
            filter === "todos_incompleted" ? "current" : ""
          }`}
          onClick={() => handleEditFilter("todos_incompleted")}
        >
          Incompleted
        </button>
      </li>
    </ul>
  );
}
