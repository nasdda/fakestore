import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
    name: "main",
    initialState: {
        openDrawer: false,
        balance: 0,
        name: "Customer",
        address: "783 N. 8th St., The Moon, 97388"
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
        },
        updateAddress: (state, action) => {
            state.address = action.payload.address.replace(/\s\s+/g, ' ')
        },
        fixAddress: state => {
            if (!state.address.trim()) {
                state.address = "783 N. 8th St., The Moon, 97388"
            }
        }
    }
})

export const {
    toggleDrawer, updateBalance,
    updateName, nameFocusOut,
    updateAddress, fixAddress } = slice.actions
export const selectOpen = state => state.main.openDrawer
export const selectBalance = state => state.main.balance
export const selectName = state => state.main.name
export const selectAddress = state => state.main.address

export default slice.reducer