import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store.js"
import { receiveTodo, receiveTodos } from "./actions/todo_actions.js";
// import App from "./components/app.jsx";
import Root from "./components/root.jsx";

const store = configureStore;

window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
//REMOVE THIS AFTER TESTING IS COMPLETE

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content")
    ReactDOM.render(<Root store={store}/>, content);
});