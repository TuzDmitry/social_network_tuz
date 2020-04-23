import React from "react";
import Friends from "./Friends";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

// const FriendsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//            {(store)=>
//                {
//                    let state=store.getState()
//                    return <Friends state={state}/>
//                }
//            }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps=(state)=>{
    return {
        state:state
    }
}

let mapDispatchToProps=(dispatch)=>{
    // return {
    // }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;