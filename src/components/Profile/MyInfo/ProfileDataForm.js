import React from "react";
import {createField, Input, Textarea} from "../../../common/formsControls/formsControls";
import {reduxForm} from "redux-form";
import style from "../../../common/formsControls/formsControls.module.css";

 const ProfileDataForm = ({profile, error, ...props}) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <button >Save</button>
            {error&&<div className={style.errorSummary}>
                {error}
            </div>}
            <div><b>fullName:</b><br/>
                {createField('name', 'fullName', Input, [])}
            </div>

            <div><b>About me:</b><br/>
                {createField('aboutMe', 'aboutMe', Textarea, [])}
            </div>

            <div><b>looking For A Job:</b><br/>
                {createField(null, 'lookingForAJob', Input,  null,{type:'checkbox'} )}

                {/*{createField(null,'rememberMe',Input,null,{type:"checkbox"},'remember me')}*/}
            </div>
            <div><b>Description:</b><br/>
                {createField('decrciption', 'lookingForAJobDescription', Textarea, null)}
            </div>


            <div>
                <h3>My contacts:</h3>
                {Object.keys(profile.contacts).map(key => {
                   return  <div key={key}><b>{key}:</b><br/>{
                        createField(`${key}`, `contacts.${key}`, Input, null)
                    }</div>

                })}
            </div>
        </form>
    )
}

const ProfileDataFormRedux=reduxForm({form: "profile"})(ProfileDataForm)

export default ProfileDataFormRedux