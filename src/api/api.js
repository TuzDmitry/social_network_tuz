import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
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

export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(newText) {
        return instance.put(`profile/status`, {status: newText})

    },
    uploadProfilePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile); //'image', means that object image:photoFile
        return instance.put(`profile/photo`,
            formData,
            {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        ).then((res) => res.data)
    },

    updateProfileData(formData) {
        return instance.put(`profile`,
            formData
        )
    }
}

