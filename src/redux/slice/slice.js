import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
    name: "main",
    initialState: {
        openDrawer: false,
        balance: 0,
        name: "Customer"
    },
    reducers: {
        toggleDrawer: state => {
            state.openDrawer = !state.openDrawer
        },
        updateBalance: (state, action) => {
            state.balance += action.payload.amount
        },
        updateName: (state, action) => {
            state.name = action.payload.name
        },
        nameFocusOut: (state) => {
            if (!state.name.trim()) {
                state.name = "Customer"
            } else {
                state.name = state.name.replace(/\s\s+/g, ' ');
            }
        }
    }
})

export const { toggleDrawer, updateBalance, updateName, nameFocusOut } = slice.actions
export const selectOpen = state => state.main.openDrawer
export const selectBalance = state => state.main.balance
export const selectName = state => state.main.name

export default slice.reducer