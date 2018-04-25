import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from './todolist';

let destination = document.querySelector("#app");

ReactDOM.render(
    <div>
        <ToDoList />
    </div>,
    destination
);
