import React from 'react'
import classes from './input.css'

const isInvalid = ( valid, touched, shouldValidate) => {
    return !valid && shouldValidate && touched
}

const Input = ( { placeholder, type, value, onChange, input, errorMassege,
                valid, touched, shouldValidate } ) => {

    const { form_group, form_input, error_style, invalid, bg_height } = classes     
    const inputType = type || 'text'
    const cls = [input, form_input]
    const htmlFor = `${inputType}-${Math.random()}`    

    if(isInvalid(valid, touched, shouldValidate)) {
        cls.push(invalid)  
     }
 
    return (
        <div className={`${bg_height} d-flex flex-column justify-content-between h-100`}>
        <div className={`${form_group}`}>
        <input  
            className={cls.join(' ')} 
            placeholder={placeholder}
            type={inputType}
            id={htmlFor}
            value={value}
            required
            onChange={onChange}
            />        
        </div>
        {
            isInvalid(valid, touched, shouldValidate)
            ? <span className={error_style}>{errorMassege || 'Вы ввели неверное значние'}</span>
            : null
        }
        </div>
    )
} 

export default Input





// if(true) {
//     //    cls = [
//     //        ...cls,
//     //        invalid    
//     //    ]
        
//     }