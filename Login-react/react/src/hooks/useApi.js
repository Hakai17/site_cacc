import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
    login: async (email, password) => {
        const response = await api.post('/login', { email, password}).catch()
        return response.data
    },

    register: async (name, email, password) => {
        const response = await api.post('/register', { name, email, password}).catch()
        return response.data
    },
})