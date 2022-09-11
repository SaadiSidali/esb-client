import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";
import { AuthUser } from '../types/auth-user-type';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            token: localStorage.getItem('token'),
            user: undefined
        } as { token: string | undefined, user: AuthUser | undefined }
    },
    reducers: {
        setToken: (state, action) => {
            state.value.token = action.payload;
        },
        autoLogin: (state) => {
            const token = localStorage.getItem('token');
            if (token) {
                const decoded = jwt_decode(token) as AuthUser;
                const isExpired = new Date(decoded.exp * 1000) < new Date(Date.now())
                if (!isExpired) {
                    state.value.user = decoded;
                } else {
                    localStorage.removeItem('token')
                }

            }
        },
        setUser: (state, action) => {
            const token = action.payload;
            const decoded = jwt_decode(token) as AuthUser

            state.value.user = decoded;
        },
        logout: (state) => {
            state.value.token = undefined;
            state.value.user = undefined;
            localStorage.removeItem('token')
        }
    },
})

export const { setToken, setUser, logout, autoLogin } = authSlice.actions

export default authSlice.reducer