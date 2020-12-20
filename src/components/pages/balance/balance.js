import React, { useState } from 'react'
import {
    FormControl, InputLabel,
    OutlinedInput, makeStyles,
    InputAdornment, Card,
    Typography, Grid
} from '@material-ui/core'
import { isCurrency } from 'validator'
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance, selectBalance } from '../../../redux/slice/slice'

import MoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    rechargeForm: {
        margin: theme.spacing(5),
        width: 300,
    },
    card: {
        width: 600,
        height: 250,
        margin: "auto",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            width: "80%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        }
    },
    topText: {
        margin: theme.spacing(4)
    },
    balanceInfo: {
        direction: "column",
        transform: "scale(3)",
        alignItems: "flex-start",
    }
}));

function Details() {
    const balance = useSelector(selectBalance)
    const classes = useStyles()
    return (
        <Card variant="outlined" className={classes.card}>
            <Grid container justify="center" className={classes.balanceInfo}>
                <Grid >
                    <MoneyIcon />
                </Grid>
                <Grid >
                    <Typography style={{ fontFamily: "inherit" }}>
                        10.00
                    </Typography>
                </Grid>
            </Grid>
        </Card>

    )

}

export default function Balance() {
    const [amount, setAmount] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()
    const amountChange = (event) => {
        let val = event.target.value
        if (val.split('.')[0].length > 6) return
        if (val.length === 0 || isCurrency(val, { allowNegatives: "false" })
            || isCurrency(val + "00", { allowNegatives: "false" })
            || isCurrency(val + "0", { allowNegatives: "false" })) {
            setAmount(val)
        }
    }
    return (
        <div style={{ fontSize: 16 }}>
            <br />
            <h2>Your Balance</h2>
            <Details />
            <FormControl className={classes.rechargeForm} variant="outlined">
                <InputLabel>Recharge</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    autoComplete="off"
                    value={amount}
                    label="Recharge"
                    placeholder="0.00"
                    onChange={amountChange}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
        </div>
    )
}