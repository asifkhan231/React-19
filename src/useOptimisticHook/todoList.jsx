import React, { useState,useOptimistic } from 'react'


export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [optimisticTodo, setOptimisticTodo] = useOptimistic(todos, (oldTodo, newTodo) => [
        ...oldTodo,
        { text: newTodo, pending: true },
    ])

    const handleTodo = async (formData) => {
        const newtodo = formData.get("todo");
        setOptimisticTodo(newtodo)

        await new Promise((resolve) => setTimeout(resolve, 1000))

        setTodos(prevTodo => [...prevTodo, { text: newtodo, pending: false },])

    }
    
    return (
        <div>
            <form action={handleTodo}>
                <input type="text" name='todo' />
                <button type="submit">add item</button>
            </form>
            <ul>
                {optimisticTodo.map((todo, index) => (
                    <li key={index}>
                        {todo.text}
                        {todo.pending && <span>(adding..)</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
