import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
const token = Cookie.get("userSession")

const initialState = {
    currentUser: {},
    token: token,
    card: []

}

const CurrentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setcurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setCard: (state, action) => {
            state.card = action.payload
        }
    }
})

export const { setcurrentUser, setToken, setCard } = CurrentUserSlice.actions
export default CurrentUserSlice.reducer

