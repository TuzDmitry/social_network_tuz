import React, {useState} from "react";

const ProfileStatusHook =(props)=>{
    let [editMode, SetEditMode]=useState(false)

    let ActivateEditMode=()=>{
        SetEditMode(true)
    }
    let DeActivateEditMode=()=>{
        SetEditMode(false)
    }

   let onChangeTitle=(e)=>{
        // let newTitle=e.currentTarget.value
        // debugger

    }


        debugger
        return (
            <>
                {/*<div>временное отображения статуса из сервера:/ <span>{this.props.status}</span>/</div>*/}
                {!editMode&&<div onClick={ActivateEditMode}>{props.status||'here will be status'}</div>}


                {editMode&&
                <input autoFocus={true} onBlur={DeActivateEditMode} onChange={onChangeTitle} type="text" value='инпут'/>}
            </>

        )
    }


export default ProfileStatusHook