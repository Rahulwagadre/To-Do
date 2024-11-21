import React from 'react';
import { useState } from "react";

export const TodoInput = ({handleAddTodo, inputTodo, setInputTodo}) => {
    
    return (
        <header>
            <input onChange = {(e) => {
                setInputTodo(e.target.value);
            }} value = {inputTodo} placeholder="Enter Todo..."></input>
            <button onClick = {() => {
                if(!(inputTodo == null || inputTodo.length <= 0))
                {
                    handleAddTodo(inputTodo);
                    setInputTodo('');
                }
            }}>Add</button>
        </header>
    )
}
