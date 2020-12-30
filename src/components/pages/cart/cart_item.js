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
        height: 100,
        paddingLeft: 10,
        paddingRight: 10,
    },
    image: {
        maxHeight: 100,
        width: 60,
        aspectRatio: 3 / 5,
        boxSizing: "border-box"
    },
    name: {
        fontFamily: "Roboto",
        textAlign: "left"
    },
    imageContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginRight: 10,
    },
    quantity: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        marginLeft: 10,
        boxSizing: "border-box",
    },
    quantityValue: {
        border: "solid",
        paddingLeft: 5,
        paddingRight: 5,
        boxSizing: "border-box"
    },
    quantityControl: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    removeButton: {
    }
}))

export default function CartItem(props) {
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
                <IconButton className={classes.removeButton}>
                    <HighlightOffIcon style={{ color: "red" }} />
                </IconButton>
            </div>
        </Card>
    )
}