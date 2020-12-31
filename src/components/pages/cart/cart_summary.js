import React, { useState } from 'react'

import { selectCart, clearCart, changeQuantity } from '../../../redux/slice/slice'
import { useDispatch, useSelector } from 'react-redux'
import { productByID } from '../../../data/product_data'

import CartItem from './cart_item'
import {
    Card, makeStyles,
    Button
} from '@material-ui/core'
import Loader from '../../loader/loader'


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "center"
        }
    },
    summary: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "20%",
        minWidth: 250,
        height: 300,
        padding: 30,
        [theme.breakpoints.down('xs')]: {
            width: "90%"
        },
        boxShadow: "0 6px 6px rgba(0,0,0,0.15)"
    },
    orderButton: {
        background: '#f7c245',
        borderRadius: 3,
        border: 0,
        height: 48,
        fontSize: "0.9rem",
        "&:hover": {
            backgroundColor: '#ffe675'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.7rem"
        },
    },
    items: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "60%",
        marginRight: 30,
        minHeight: 200,
        minWidth: 400,
        boxShadow: "2px 6px 6px rgba(0,0,0,0.15)",
        boxSizing: "border-box",
        [theme.breakpoints.down('sm')]: {
            marginRight: 10
        },
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            marginRight: 0
        },
    }
}))

export default function CartSummary() {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    let subtotal = 0
    const classes = useStyles()
    let items = []
    const [placingOrder, setPlacingOrder] = useState(false)
    const change = (item_id, amount) => {
        dispatch(changeQuantity({ id: item_id, amount: amount }))
    }
    const remove = (item_id) => {
        dispatch(changeQuantity({ id: item_id, amount: -cart[item_id] }))
    }

    for (const id in cart) {
        if (cart[id] > 0) {
            subtotal += productByID[id].price * cart[id]
            items.push(<CartItem
                name={productByID[id].productName}
                image={productByID[id].images[0]}
                id={id}
                qty={cart[id]}
                change={change}
                remove={remove}
                key={items.length} />)
        }
    }

    if (items.length === 0) {
        items = <h1 style={{ color: "#c4c4c4", userSelect: "none" }}>Cart is Empty</h1>
    }

    let taxes = 0.093 * subtotal
    taxes = Math.round(taxes * 100) / 100
    subtotal = Math.round(subtotal * 100) / 100
    const total = subtotal + taxes

    return (
        <React.Fragment>
            {placingOrder ? <Loader /> :
                <div className={classes.root}>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet" />
                    <Card variant="outlined" className={classes.items}>
                        {items}
                    </Card>
                    {subtotal !== 0 ?
                        <Card variant="outlined" className={classes.summary}>
                            <p>Subtotal: $ {subtotal.toFixed(2)}</p>
                            <p>Taxes: $ {taxes.toFixed(2)}</p>
                            <p>Total: $ {total.toFixed(2)}</p>
                            <Button
                                className={classes.orderButton}
                                onClick={event => {
                                    setPlacingOrder(true)
                                    setTimeout(() => {
                                        dispatch(clearCart())
                                        setPlacingOrder(false)
                                    }, 3000)
                                }}>
                                <b>Place Order</b></Button>
                        </Card>
                        : <div></div>
                    }
                </div>
            }
        </React.Fragment>


    )
}