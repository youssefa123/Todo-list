import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';


function TodoList() {
    const[todos, setTodos] = useState([]);

    //Allows for if no one types a letter it won't show up
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;   
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;

        setTodos(prev => prev.map(item =>(item.id == todoId ? newValue: item )))
        };
    };



    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !==id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatetedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatetedTodos);
    };


    return (
        <div>
            <h1>Plans for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo=
            {removeTodo} updateTodo = {updateTodo}/>   
        </div>
  );
}

export default TodoList;