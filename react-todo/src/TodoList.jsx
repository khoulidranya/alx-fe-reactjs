import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a Todo App", completed: true },
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const AddTodoForm = ({ onAddTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a todo" />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoList;
