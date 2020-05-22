
// debugger
// passing in a state => store.getState(); 
//return an Object w/todos
//todos => Object of todos 
// allTodos turns this obj into an array. 
// w/o {} around state => todos is undefined
// w/ {} => cannot read property todos of undefined
// {} plucks out what we need (key)

// export const allTodos = (state) => (
//     Object.keys(state["todos"]).map(id => state.todos[id])
// );

export const allTodos = ({todos}) => (
    Object.keys(todos).map(id => todos[id])
);
// () implicit return doesnt allow debugger

// export const allTodos = (todos) => (
//     Object.keys(todos).map(id => todos[id])
//     //=> [{1}{2}]
// );