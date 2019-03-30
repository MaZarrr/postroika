import React from 'react'
import classes from './input.css'

const Input = ({ placeholder, type, value, onChange, errorMassege }) => {
    const inputType = type || 'text'
    const cls = [classes.form_group]
    const htmlFor = `${inputType}-${Math.random()}`

    return (
        <div className={cls.join(' ')}>
        <input 
            className="input form_input" placeholder={placeholder}
            type={inputType}
            id={htmlFor}
            value={value}
            onChange={onChange}
            >        
            </input>
            {/* <span>{errorMassege}</span> */}
        </div>
    )
} 

export default Input
