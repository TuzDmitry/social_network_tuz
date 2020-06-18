////SELECTORS
import {createSelector} from "reselect";

 const getUsersSimpe = (state) => {
    return state.usersPage.users;
}



export const getUsers = createSelector(getUsersSimpe,(users)=>{
    return users.filter(u=>true)
})






export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getAwaitingResponse = (state) => {
    return state.usersPage.awaitingResponse;
}


export const someDifficultSelector=(state)=>{

}