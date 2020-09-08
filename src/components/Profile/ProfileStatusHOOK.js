import React, {useEffect, useState} from "react";
import p from './Profile.module.css';


const ProfileStatusHook =(props)=>{
    let [editMode, setEditMode]=useState(false)
    let [status, changeStatus]=useState(props.status)

    useEffect(()=>{
        changeStatus(props.status)

    },[props.status])


    let activateEditMode=()=>{
        setEditMode(true)
    }
    let deActivateEditMode=()=>{
        setEditMode(false)
        props.UpDateProfileStatus(status)
    }

   let onChangeTitle=(e)=>{
        let newTitle=e.currentTarget.value
       debugger
       changeStatus(newTitle)

    }

        return (
            <div className={p.status}>
                {!editMode&&<div onClick={activateEditMode}>{status||'here will be status'}</div>}
                {editMode&&
                <input autoFocus={true} onBlur={deActivateEditMode} onChange={onChangeTitle} type="text" value={status}/>}
            </div>

        )
    }


export default ProfileStatusHook