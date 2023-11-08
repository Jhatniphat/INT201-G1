// const Todo = require('./myLibs/Todo.js')
// const echo = require('./myLibs/doSomething.js')
import { Todo } from "./myLibs/Todo";
import { doSomething } from "./myLibs/doSomething";
function TodoManagement() {
    let todos = [];
    let countId = 0;
    function addTodo(desc) {
      todos.push(new Todo(countId++, desc));
      return todos.length;
    }
    function findTodo(searchId) {
      return todos.find((todo) => todo.id === searchId);
    }
    function findIndexTodo(searchId) {
      return todos.findIndex((todo) => todo.id === searchId);
    }
    function removeTodo(removeId) {
      if (todos.findIndex((todo) => todo.id === removeId) > -1) {
        todos.splice(todos.findIndex((todo) => todo.id === removeId),1);
      }
    }
    function getTodos() {
      return todos;
    }
    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos };
  }
  
  const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos } = TodoManagement();
  
  addTodo("doSleep");
  addTodo("doHomework");
  addTodo("doWarmup");
  addTodo("doTest");
  addTodo("blablabla");
  
  console.log(getTodos());
  
  console.log(findTodo(1));
  console.log("-------------------------");
  console.log(findIndexTodo(4));
  console.log("-------------------------");
  removeTodo(4);
  console.log(getTodos());

export { TodoManagement }
  