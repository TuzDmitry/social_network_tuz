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
    // debugger
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            {children}
            {hasError && <div>{meta.error}</div>}
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
    const {input, meta,label, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
            {label&&<label htmlFor={props.id}>{label}</label>}
        </FormControl>
    )
}


export const createField = (placeholder, name, component, validators, props = {}, label = '') => {
    return (
        <div className={style.wrapperField}>
            <Field placeholder={placeholder}
                   id={name}
                   name={name}
                   label={label}
                   component={component}
                   validate={validators}
                   {...props}
            />
            {/*{text && <label htmlFor={name}>{text}</label>}*/}
        </div>
    )
}




