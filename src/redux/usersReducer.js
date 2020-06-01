import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_AWAITING_RESPONSE = 'TOGGLE_IS_AWAITING_RESPONSE'


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
                users: state.users.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

        case SET_USERS:
            debugger
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
export const setTotalUsersCount = (totalcount) => ({type: SET_TOTAL_USERS_COUNT, totalcount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsAwaitingResponse = (userId, awaitingResponse) => ({
    type: TOGGLE_IS_AWAITING_RESPONSE,
    userId,
    awaitingResponse
})

////Thunk

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        /////вынесли запрос в отдельную фунцию, и теперь обращаемся к ней , передав в параметры нужные данные из пропс
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                // debugger;
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))

            });
    }
}


export const changePageUsersTC = (el, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(el))
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(el, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
            })
        ;
    }
}


export const followUserTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsAwaitingResponse(userId, true))

        usersAPI.followUser(userId)
            .then((data) => {
                if (data.resultCode == 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleIsAwaitingResponse(userId, false))
            })
    }
}

export const unfollowUserTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsAwaitingResponse(userId, true))
        usersAPI.unfollowUser(userId)
            .then((data) => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleIsAwaitingResponse(userId, false))
            })
    }
}


export default usersReducer;