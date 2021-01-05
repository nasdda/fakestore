import React, { useState, useRef, useEffect } from 'react'

import AccountImage from '../../../images/account.png'
import {
    Card, makeStyles,
    IconButton, Tooltip
} from '@material-ui/core'
import {
    selectName, updateName,
    nameFocusOut, selectBalance,
    selectAddress, updateAddress,
    fixAddress
} from '../../../redux/slice/slice'

import { useSelector, useDispatch } from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';


const useStyles = makeStyles(theme => ({
    accountImage: {
        width: "13rem",
        height: "13rem",
        [theme.breakpoints.down('xs')]: {
            width: "10rem",
            height: "10rem"
        },
    },
    profile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "30rem",
        width: "23rem",
        margin: "auto",
        padding: "1rem",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            padding: 0,
        }
    },
    name: {
        fontSize: "1.2rem",
        border: "none",
        textAlign: "center",
        fontFamily: "inherit",
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "0.8rem",
        resize: "none",
    },
    info: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    specifics: {
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
    },
    profileHead: {
        borderBottom: "solid",
        borderColor: "#878787",
        width: "100%",
    },
    edit: {
        border: "none",
        resize: "none",
        marginLeft: "0.8rem",
        fontFamily: "inherit",
        fontSize: "inherit",
    }

}))

export default function Account() {
    const classes = useStyles()
    const username = useSelector(selectName)
    const balance = useSelector(selectBalance)
    const userAddress = useSelector(selectAddress)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const editRef = useRef()

    useEffect(() => {
        if (edit) {
            editRef.current.focus()
        }
    }, [edit])

    const editHandler = event => {
        setEdit(!edit)
    }

    let addressSection = (
        <div style={{ marginLeft: "0.8rem", wordBreak: "break-word" }}>{userAddress}</div>
    )

    if (edit) {
        addressSection = (
            <TextareaAutosize
                ref={editRef}
                className={classes.edit}
                value={userAddress}
                onChange={event => { dispatch(updateAddress({ address: event.target.value })) }}
                onBlur={event => {
                    dispatch(fixAddress())
                    if (!event.relatedTarget) {
                        setEdit(false)
                    }
                }}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        dispatch(fixAddress())
                        setEdit(false)
                    }
                }}
                maxLength={80}
            />
        )
    }

    return (
        <React.Fragment>
            <br />
            <Card variant="outlined" className={classes.profile}>
                <div className={classes.profileHead}>
                    <div style={{ width: "100%" }}>
                        <img src={AccountImage} alt="account" className={classes.accountImage} />
                    </div>
                    <Tooltip title="Click to Edit">
                        <TextareaAutosize
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
                    </Tooltip>
                </div>

                <br />
                <div className={classes.specifics}>
                    <div className={classes.info}>
                        <div>Balance: ${balance.toFixed(2)}</div>
                        <NavLink to="/balance">
                            <Tooltip title="Recharge">
                                <IconButton>
                                    <AddCircleIcon />
                                </IconButton>
                            </Tooltip>
                        </NavLink>
                    </div>
                </div>
                <div className={classes.specifics} style={{ textAlign: "left" }}>
                    <div className={classes.info}>
                        <div style={{ display: "flex", alignItems: "flex-start", maxWidth: "80%" }}>Address:{addressSection}</div>
                        <Tooltip title="Edit Address">
                            <IconButton onClick={editHandler}>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </Card>
        </React.Fragment>
    )
}