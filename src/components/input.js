import React, { Component } from 'react';


const Input = (word, state, onChange, name) => {
    return (
        <div className="input">
            <input name={name} value={state} onChange={onChange}/>   
            <label>{word}</label>    
        </div>
    )
}



export default Input;