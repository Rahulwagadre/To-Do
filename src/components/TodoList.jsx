import React from 'react'
import Todocard from './Todocard';

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
