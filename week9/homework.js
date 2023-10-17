class Todo {
    // id = 0;
    // description = "";
    constructor(id , description){
        this.id = id
        this.description = description
    }

    getTodo(){
        return {id : this.id , description : this.description}
    };

    setDescription(newDes){
        this.description = newDes
    }

}

function TodoManagement(){
    let todos = []
    function addTodo(desc){
        todos.push(desc)
        return todos.length
    }
    function findTodo(searchId){
        return todos.find(todo => todo.id === searchId)
    }
    function findIndexTodo(searchId){
        return todos.findIndex(todo => todo.id === searchId)
    }
    function removeTodo(removeId){
        todos.splice(todos.findIndex(todo => todo.id === removeId) , 1)
    }
    function getTodos(){
        return todos
    }
    return {addTodo , findTodo , findIndexTodo , removeTodo , getTodos}
}
const {addTodo , findTodo  , findIndexTodo , removeTodo , getTodos} = TodoManagement()
addTodo(new Todo(1 , 'doSleep'))
addTodo(new Todo(2 , 'doHomework'))
addTodo(new Todo(3 , 'doWarmup'))
addTodo(new Todo(4 , 'doTest'))
addTodo(new Todo(5 , 'blablabla'))

console.log(getTodos())

console.log(findTodo(1))
console.log('-------------------------')
console.log(findIndexTodo(4))
console.log('-------------------------')
removeTodo(3)
console.log(getTodos())
