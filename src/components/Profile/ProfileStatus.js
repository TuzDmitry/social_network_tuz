import React from "react";

class ProfileStatus extends React.Component{

    state={
        statusValue:'here will be status',
        editMode: false
    }

    ActivateEditMode=()=>{
        this.setState({editMode: true})
    }
    deActivateEditMode=()=>{
        this.setState({editMode: false})
    }

    onChangeTitle=(e)=>{
        let newTitle=e.currentTarget.value
        debugger
        this.setState({statusValue:newTitle})
    }


    render() {
        return (
            <>
                {!this.state.editMode&&<div onClick={this.ActivateEditMode}>{this.state.statusValue}</div>}
                {this.state.editMode&&<input autoFocus={true} onBlur={this.deActivateEditMode} onChange={this.onChangeTitle} type="text" value={this.state.statusValue}/>}
            </>
            
        )
    }
}

export default ProfileStatus