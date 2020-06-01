import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

////Старые примеры, эволюция АПИ
// export const followUser = (userId) => {
//     return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
//         {},
//         {
//             withCredentials: true,
//             headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"}
//         }
//     ).then((response) => {
//         return response.data
//     })
// }

// export const followUser = (userId) => {
//     return instance.post(`follow/${userId}`,
//         {}
//     ).then((response) => {
//         return response.data
//     })
// }



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        /////мы должны вернуть из ф-и, то что нам отдал запрос (return)
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`,
            {}
        ).then((response) => {
            return response.data
        })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    }
}

export const authAPI={
    getAuth(){
        return instance.get(`auth/me`)
    }
}
export const profileAPI={
    getProfile(userId){
        return instance.get(`profile/`+userId)
    }
}

