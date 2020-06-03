import React from "react";

class ProfileStatus extends React.Component{

    state={
        // statusValue:this.props.status,
        statusValue:'',
        editMode: false
    }



    ActivateEditMode=()=>{
        // this.setState({editMode: true})
        this.setState({editMode: true, statusValue:this.props.status})

    }
    deActivateEditMode=()=>{
        this.setState({editMode: false})
        this.props.UpDateProfileStatus(this.state.statusValue)
    }

    onChangeTitle=(e)=>{
        let newTitle=e.currentTarget.value
        debugger
        this.setState({statusValue:newTitle})
    }


    render() {
        debugger
        return (
            <>
                <div>временное отображения статуса из сервера:/ <span>{this.props.status}</span>/</div>
                {!this.state.editMode&&<div onClick={this.ActivateEditMode}>{this.props.status||'here will be status'}</div>}
                {this.state.editMode&&
                <input autoFocus={true} onBlur={this.deActivateEditMode} onChange={this.onChangeTitle} type="text" value={this.state.statusValue}/>}
            </>

        )
    }
}

export default ProfileStatus