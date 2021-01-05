import React from 'react'
import { Typography, makeStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    body: {
        width: "50rem",
        [theme.breakpoints.down('sm')]: {
            width: "90%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
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
    const classes = useStyles()
    return (
        <div>
            <div>
                <br />
                <h2>About This Site</h2>
                <br />
                <Textchunk>First and foremost, this site is by all means only an online shopping simulation, 
                hence no actual transitions would be going on, 
                and none of the personal data that you have entered would be saved.</Textchunk>
                <Divider className={classes.body} />
                <br />
                <Textchunk>Every product displayed on this site is 
                based on real products taken mainly from Amazon.com. 
                If you wish to purchase the actual product, 
                there would be a link to the actual product 
                available on the bottom of each product's detail page.</Textchunk>
            </div>
        </div>
    )
}

export default About