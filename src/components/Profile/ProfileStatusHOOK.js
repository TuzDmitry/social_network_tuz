import React, {useEffect, useState} from "react";

const ProfileStatusHook =(props)=>{
    let [editMode, setEditMode]=useState(false)
    let [status, changeStatus]=useState(props.status)

    useEffect(()=>{
        debugger
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
            <>
                {!editMode&&<div onClick={activateEditMode}>{status||'here will be status'}</div>}


                {editMode&&
                <input autoFocus={true} onBlur={deActivateEditMode} onChange={onChangeTitle} type="text" value={status}/>}
            </>

        )
    }


export default ProfileStatusHook