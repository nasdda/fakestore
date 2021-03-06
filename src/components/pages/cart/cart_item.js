import React from 'react'

import { Card, makeStyles, IconButton, Divider } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        height: "7rem",
        paddingLeft: "0.7rem",
        paddingRight: "0.7rem",
    },
    image: {
        maxHeight: "6rem",
        maxWidth: "4rem",
    },
    name: {
        fontFamily: "Roboto",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%"
    },
    imageContainer: {
        marginRight: "0.7rem",
        boxSizing: "border-box",
        minWidth: "4rem",
        maxWidth: "4rem",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    quantity: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "11rem",
        marginLeft: "0.7rem",
        boxSizing: "border-box",
    },
    quantityValue: {
        border: "solid",
        paddingLeft: "0.4rem",
        paddingRight: "0.4rem",
        boxSizing: "border-box",
        minWidth: "3rem",
    },
    quantityControl: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}))

function CartItem(props) {
    const classes = useStyles()
    return (
        <Card className={classes.root} variant="outlined">
            <div style={{ display: "flex" }}>
                <div className={classes.imageContainer}>
                    <img src={props.image} alt="cart item" className={classes.image} />
                </div>
                <div className={classes.name}>
                    <Link to={`/product?id=${props.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {props.name}
                    </Link>
                </div>
            </div>
            <div className={classes.quantity}>
                <IconButton onClick={event => props.change(props.id, -1)}>
                    <RemoveIcon />
                </IconButton>
                <div className={classes.quantityValue}>
                    {props.qty}
                </div>
                <IconButton onClick={event => props.change(props.id, 1)}>
                    <AddIcon />
                </IconButton>
                <Divider orientation="vertical" />
                <IconButton onClick={event => props.remove(props.id)}>
                    <HighlightOffIcon style={{ color: "red" }} />
                </IconButton>
            </div>
        </Card>
    )
}

export default React.memo(CartItem, (prevProps, nextProps) => {
    if (prevProps.qty === nextProps.qty) return true
    return false
})