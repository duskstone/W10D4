import React from 'react';
// import TodoList from './todo_list_container.jsx';


// export default () => <h3>Todo List goes here!</h3>
// const TodoList = ({todos, recieveTodo }) => {
    
//         const todoTitles = todos.map((todo, idx) => (
//             <Todo key={idx} todo={todo} />
//         );

//     return (
//         <ul>
//          <h3>Todo List goes here!</h3>
//             {this.props.todos.forEach(todo=>{
//                 return <li>{todo}</li>
//             })}
//         </ul>

//     );

// };

class TodoList extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
        <ul>
         <h3>Todo List goes here!</h3>
            {this.props.todos.forEach(todo=>{
                return <li>{todo}</li>
            })}
        </ul>

    );
    }
}

// const TodoList = ({ todos }) => (
//     <ul>
//         <h3>Todo List goes here!</h3>
//             {todos.forEach(todo => {
//              return <li>{todo}</li>
//            })}
//     </ul>
// );


export default TodoList;
                     
