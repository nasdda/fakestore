import React, { useState } from 'react'
import {
    FormControl, InputLabel,
    OutlinedInput, makeStyles,
    InputAdornment, createMuiTheme,
    ThemeProvider
} from '@material-ui/core'
import { isCurrency } from 'validator'



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    rechargeForm: {
        margin: theme.spacing(1),
        width: 300,
        [theme.breakpoints.down('sm')]: {
            width: "90%"
        }
    }
}));


export default function Balance() {
    const [amount, setAmount] = useState('')
    const classes = useStyles()
    const theme = createMuiTheme({
        typography: {
            fontSize: 18
        },
    });
    const amountChange = (event) => {
        let val = event.target.value
        if (val.split('.')[0].length > 8) return
        if (val.length === 0 || isCurrency(val, { allowNegatives: "false" })
            || isCurrency(val + "00", { allowNegatives: "false" })
            || isCurrency(val + "0", { allowNegatives: "false" })) {
            setAmount(val)
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <h2>Your Balance</h2>
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
        </ThemeProvider>


    )
}