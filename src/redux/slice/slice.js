import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: "main",
    initialState: {
        openDrawer: false,
    },
    reducers: {
        toggleDrawer: state => {
            state.openDrawer = !state.openDrawer
        }
    }
})

export const { toggleDrawer } = slice.actions
export const selectOpen = state => state.main.openDrawer

export default slice.reducer