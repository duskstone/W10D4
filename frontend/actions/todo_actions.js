
const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos: todos
}); 

const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo: todo
}); 


export const RECIEVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

