
////////уже не используем

import React from "react";

class ProfileStatus extends React.Component{

    state={
        status:this.props.status,
        //возможность обходиться без didUpdate
        // statusValue:'',
        editMode: false
    }



    ActivateEditMode=()=>{
        this.setState({editMode: true})
            //возможность обходиться без didUpdate
        // this.setState({editMode: true, statusValue:this.props.status})

    }
    deActivateEditMode=()=>{
        this.setState({editMode: false})
        this.props.UpDateProfileStatus(this.state.status)
    }

    onChangeTitle=(e)=>{
        let newTitle=e.currentTarget.value
        // debugger
        this.setState({status:newTitle})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        ////позволяет выполнить дейсвие при условии сравнения предыдущих и текущих данных
        // debugger
        //если новые пропсы не равны старым то засетай нам в локалСтатус новый прийденный статус из пропс
        if (this.props.status!== prevProps.status){
            this.setState({status:this.props.status})
        }

        console.log('componentDidUpdate')
    }


    render() {
        // debugger
        return (
            <>
                {/*<div>временное отображения статуса из сервера:/ <span>{this.props.status}</span>/</div>*/}
                {!this.state.editMode&&<div onClick={this.ActivateEditMode}>{this.props.status||'here will be status'}</div>}
                {this.state.editMode&&
                <input autoFocus={true} onBlur={this.deActivateEditMode} onChange={this.onChangeTitle} type="text" value={this.state.status}/>}
            </>

        )
    }
}

export default ProfileStatus