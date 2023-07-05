import { configureStore } from '@reduxjs/toolkit'
import CurrentUser from "./CurrentUserSlice"

const Store = configureStore({
    reducer: {
        CurrentUser
    }
})

export default Store