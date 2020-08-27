import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'social_network/usersReducer/FOLLOW';
const UNFOLLOW = 'social_network/usersReducer/UNFOLLOW';
const SET_USERS = 'social_network/usersReducer/SET_USERS'
const SET_CURRENT_PAGE = 'social_network/usersReducer/SET_CURRENT_PAGE'
const SET_PAGE_SIZE = 'social_network/usersReducer/SET_PAGE_SIZE'
const SET_TOTAL_USERS_COUNT = 'social_network/usersReducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'social_network/usersReducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_AWAITING_RESPONSE = 'social_network/usersReducer/TOGGLE_IS_AWAITING_RESPONSE'


let initialState = {
    users: [
        // {name: "Fomith1", id: 8241, uniqueUrlName: null, photos: {…}, status: null, …}
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    awaitingResponse: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(user => {
        //             if (action.userId === user.id) {
        //                 return {...user, followed: false}
        //             }
        //             return user;
        //         })
        //     }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalcount
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentpage
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_AWAITING_RESPONSE:
            return {
                ...state,
                awaitingResponse: action.awaitingResponse
                    ? [...state.awaitingResponse, action.userId]
                    : state.awaitingResponse.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentpage) => ({type: SET_CURRENT_PAGE, currentpage})
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize})
export const setTotalUsersCount = (totalcount) => ({type: SET_TOTAL_USERS_COUNT, totalcount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsAwaitingResponse = (userId, awaitingResponse) => ({
    type: TOGGLE_IS_AWAITING_RESPONSE,
    userId,
    awaitingResponse
})

////Thunk

export const baseRequestUsers = () => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true))
        let page = getState().usersPage.currentPage
        let pageSize = getState().usersPage.pageSize
        /////вынесли запрос в отдельную фунцию, и теперь обращаемся к ней , передав в параметры нужные данные из пропс
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false))
    }
}
export const getUsersByChangedPage = (page) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(page))
        dispatch(baseRequestUsers())
    }
}
export const getUsersByChangedPageSize = (pageSize) => {
    return async (dispatch) => {
        dispatch(setPageSize(pageSize))
        dispatch(baseRequestUsers())
    }
}


export const followUnfollow = async (dispatch, userId, AC, apiMethod) => {
    dispatch(toggleIsAwaitingResponse(userId, true))
    let data = await apiMethod(userId)
    if (data.resultCode == 0) {
        dispatch(AC(userId))
    }
    dispatch(toggleIsAwaitingResponse(userId, false))
}

export const followUser = (userId) => {
    return (dispatch) => {
        let apiMethod = usersAPI.followUser.bind(usersAPI)
        followUnfollow(dispatch, userId, follow, apiMethod)
    }
}
export const unfollowUser = (userId) => {
    return (dispatch) => {
        let apiMethod = usersAPI.unfollowUser.bind(usersAPI)
        followUnfollow(dispatch, userId, unfollow, apiMethod)
    }
}

export default usersReducer;