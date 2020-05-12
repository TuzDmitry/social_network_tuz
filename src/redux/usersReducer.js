
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'

let initialState = {
    users: [

    ],
    pageSize:100,
    totalUsersCount: 0,
    currentPage:1,
    isFetching:true
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            // let stateCopy={...state, users: [...state.users]}
            return  {
                ...state,
                users: state.users.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

        case SET_USERS:
            return {
                ...state,
                // users: [...state.users, ...action.users]
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
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users)=>({type: SET_USERS, users})
export const setCurrentPage=(currentpage)=>({type:SET_CURRENT_PAGE, currentpage})
export const setTotalUsersCount=(totalcount)=>({type:SET_TOTAL_USERS_COUNT, totalcount})
export const toggleIsFetching=(isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})


export default usersReducer;