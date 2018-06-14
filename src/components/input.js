import React, { Component } from 'react';


const Input = ({word, state, name}, onChange) => {
    return (
        <div key={name} className="input">
            <input name={name} value={state} onChange={onChange}/>   
            <label>{word}</label>    
        </div>
    )
}



export default Input;