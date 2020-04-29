
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            fullName: 'DmirtyK',
            location: {city: 'Minsk', country: 'Belarus'},
            status: 'I like football',
            followed: false,
            urlAvatar: 'fdsfsdf'
        },
    ]


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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users)=>({type: SET_USERS, users})



export default usersReducer;