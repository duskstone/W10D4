import React from 'react';
import TodoListContainer from "./todos/todo_list_container.jsx"
import TodoList from "./todos/todo_list.jsx"

class App extends React.Component {
    render(){
        return (
            <h1>Todos App</h1>,
            <TodoListContainer />,
            <TodoList />
        )
    };
};

export default App;