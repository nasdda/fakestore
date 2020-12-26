import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
    name: "main",
    initialState: {
        openDrawer: false,
        balance: 0,
        name: "Customer",
        address: "783 N. 8th St., The Moon, 97388",
        cart: new Map()
    },
    reducers: {
        toggleDrawer: state => {
            state.openDrawer = !state.openDrawer
        },
        updateBalance: (state, action) => {
            state.balance += action.payload.amount
            if (state.balance > 1000000) {
                alert("Your balance can have atmost $1,000,000.")
                state.balance = 1000000
            }
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
        },
        addToCart: (state, action) => {
            if (state.cart.has(action.payload.id)) {
                state.cart[action.payload.id]++
            } else {
                state.cart[action.payload.id] = 1
            }
        },
        removeFromCart: (state, action) => {
            state.cart[action.payload.id]--
            if (state.cart[action.payload.id] === 0) {
                state.cart.delete(action.payload.id)
            }
        }
    }
})

export const {
    toggleDrawer, updateBalance,
    updateName, nameFocusOut,
    updateAddress, fixAddress,
    addToCart, removeFromCart } = slice.actions
export const selectOpen = state => state.main.openDrawer
export const selectBalance = state => state.main.balance
export const selectName = state => state.main.name
export const selectAddress = state => state.main.address
export const selectCard = state => state.main.cart

export default slice.reducer