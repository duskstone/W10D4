import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store.js"
import { receiveTodo, receiveTodos } from "./actions/todo_actions.js";

const store = configureStore;

window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
//REMOVE THIS AFTER TESTING IS COMPLETE

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content")
    ReactDOM.render(<h1>Todos App</h1>, content);
});