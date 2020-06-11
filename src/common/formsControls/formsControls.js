import React from "react";
import style from './formsControls.module.css'

const Textarea = ({input, meta, ...props}) => {
    debugger

    const hasError = meta.touched && meta.error
    return (
        // <div className={`${style.formControl} ${style.error}`}>
        <div className={style.formControl+" "+( hasError?style.error: "")}>
            <textarea {...input}{...props} ></textarea>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}
export default Textarea