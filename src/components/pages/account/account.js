import React from 'react'

import AccountImage from '../../../images/account.png'
import { Card, makeStyles } from '@material-ui/core'
import { selectName, updateName, nameFocusOut } from '../../../redux/slice/slice'
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    accountImage: {
        width: 200,
        height: 200
    },
    profile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 500,
        width: 350,
        margin: "auto",
        padding: 15,
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        }
    },
    name: {
        fontSize: "1.2rem",
        height: "6em",
        overflow: "hidden",
        border: "none",
        textAlign: "center",
        fontFamily: "inherit",
        resize: "none",
    }

}))

export default function Account() {
    const classes = useStyles()
    const username = useSelector(selectName)
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <br />
            <Card variant="outlined" className={classes.profile}>
                <img src={AccountImage} alt="account" className={classes.accountImage} />
                <textarea
                    value={username}
                    className={classes.name}
                    onChange={event => {
                        dispatch(updateName({ name: event.target.value }))
                    }}
                    onBlur={event => {
                        dispatch(nameFocusOut())
                    }}
                    maxLength={50}
                />
            </Card>
        </React.Fragment>
    )
}