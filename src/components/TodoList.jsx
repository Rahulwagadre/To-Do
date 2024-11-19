import React from 'react'
import TodoCard from './TodoCard';

export const TodoList = ( {todos, handleDeleteTodo, handleUpdateTodo} ) => {
    console.log(todos);
    return (
        <ul className='main'>
            {todos.map((todo, index) => {
                return <TodoCard key={index} index={index} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo}>
                        <p>{todo}</p>
                </TodoCard>
            })}
        </ul>
    )
}
