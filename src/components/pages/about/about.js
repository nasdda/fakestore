import React from 'react'
import { Typography, makeStyles, createMuiTheme, ThemeProvider, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    body: {
        width: 800,
        [theme.breakpoints.down('sm')]: {
            width: "90%"
        },
        margin: "auto",
    },
}))


function Textchunk(props) {
    const classes = useStyles()
    return (
        <Typography className={classes.body} varient="h2">
            {props.children}
        </Typography>
    )
}

function About() {
    const theme = createMuiTheme({
        typography: {
            fontSize: 16
        },
    });
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <div>
                <br />
                <h2>About This Site...</h2>
                <br />
                <Textchunk>First and foremost, this site is by all means only an online shopping simulation, hence no actual transitions would be going on, and none of the personal data that you have entered would be saved.</Textchunk>
                <Divider className={classes.body} />
                <br />
                <Textchunk>Every product displayed on this site is based on real products taken mainly from Amazon.com. If you wish to actually purchase the product, click on the "actual product" link found on each product's detail page to be directed to the source of the real product.</Textchunk>
            </div>
        </ThemeProvider>
    )
}

export default About