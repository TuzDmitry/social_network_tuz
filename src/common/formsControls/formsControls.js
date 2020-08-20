import React from "react";
import style from './formsControls.module.css'

export const Textarea1 = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <textarea {...input}{...props} ></textarea>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

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

const FormControl = ({input, meta, child, ...props}) => {
    // debugger
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            {props.children}
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
    // debugger
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>

    )
}




