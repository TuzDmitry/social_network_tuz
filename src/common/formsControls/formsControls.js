import React from "react";
import style from './formsControls.module.css'
import {Field} from "redux-form";

// export const Input = ({input, meta, ...props}) => {
//     debugger
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={style.formControl + " " + (hasError ? style.error : "")}>
//             <input {...input}{...props} />
//             {hasError && <span>{meta.error}</span>}
//         </div>
//
//     )
// }

const FormControl = ({meta, children}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            {children}
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input}{...restProps} ></textarea>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}


export const createField = (placeholder, name, component, validators, props = {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}/>

            {text}
        </div>
    )
}




