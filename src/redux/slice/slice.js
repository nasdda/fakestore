import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

let itemCount = 0

export const slice = createSlice({
    name: "main",
    initialState: {
        openDrawer: false,
        balance: 0,
        name: "Customer",
        address: "783 N. 8th Street, The Moon, 97388",
        cart: {}
    },
    reducers: {
        toggleDrawer: state => {
            state.openDrawer = !state.openDrawer
        },
        closeDrawer: state => {
            state.openDrawer = false
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
                state.address = "783 N. 8th Street, The Moon, 97388"
            }
        },
        addToCart: (state, action) => {
            if (itemCount + action.payload.quantity > 100) {
                alert("Cart limit exceeded. You may only have up to 100 items in the cart at once.")
                return
            }
            const newCart = { ...state.cart }
            if (action.payload.id in newCart) {
                newCart[action.payload.id] += action.payload.quantity
            } else {
                newCart[action.payload.id] = action.payload.quantity
            }
            state.cart = newCart
            itemCount += action.payload.quantity
            toast.dark("Added to cart")
        },
        removeFromCart: (state, action) => {
            const newCart = { ...state.cart }
            newCart[action.payload.id] -= action.payload.quantity
            if (newCart[action.payload.id] <= 0) {
                delete newCart[action.payload.id]
            }
            state.cart = newCart
            itemCount -= action.payload.quantity
        },
        clearCart: (state) => {
            state.cart = {}
            itemCount = 0
            toast.dark("Order placed")
        },
        changeQuantity: (state, action) => {
            if (itemCount + action.payload.amount > 100) {
                alert("Cart limit exceeded. You may only have up to 100 items in the cart at once.")
                return
            }
            itemCount += action.payload.amount
            const newCart = { ...state.cart }
            newCart[action.payload.id] += action.payload.amount
            if (newCart[action.payload.id] <= 0) {
                delete newCart[action.payload.id]
            }
            state.cart = newCart
        }
    }
})

export const {
    toggleDrawer, updateBalance,
    updateName, nameFocusOut,
    updateAddress, fixAddress,
    addToCart, removeFromCart,
    clearCart, changeQuantity,
    closeDrawer
} = slice.actions
export const selectOpen = state => state.main.openDrawer
export const selectBalance = state => state.main.balance
export const selectName = state => state.main.name
export const selectAddress = state => state.main.address
export const selectCart = state => state.main.cart
export const selectItemCount = state => itemCount

export default slice.reducer