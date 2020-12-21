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
            state.balance += action.payload.amount
        }
    }
})

export const { toggleDrawer, updateBalance } = slice.actions
export const selectOpen = state => state.main.openDrawer
export const selectBalance = state => state.main.balance

export default slice.reducer