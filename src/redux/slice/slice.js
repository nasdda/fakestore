import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: "main",
    initialState: {
        openDrawer: false,
        balance: 0
    },
    reducers: {
        toggleDrawer: state => {
            state.openDrawer = !state.openDrawer
        },
        updateBalance: (state, action) => {
            state.balace += action.amount
        }
    }
})

export const { toggleDrawer, updateBalance } = slice.actions
export const selectOpen = state => state.main.openDrawer
export const selectBalance = state => state.main.balace

export default slice.reducer