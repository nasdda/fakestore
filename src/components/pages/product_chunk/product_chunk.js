import React from 'react'
import {
    Card, CardMedia,
    Typography, makeStyles,
    Divider
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        margin: "auto",
        height: 200,
        width: 700,
        [theme.breakpoints.down('sm')]: {
            height: 180,
            width: 500
        },
        [theme.breakpoints.down('xs')]: {
            height: 180,
            width: "100%"
        }
    },
    image: {
        height: "100%",
        width: 100,
        [theme.breakpoints.down('sm')]: {
            width: 80
        }
    },
    info: {
        margin: "auto",
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 5
    }
}));

export default function ProductChunk(props) {

    const classes = useStyles()
    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia image={props.coverImage}
                className={classes.image}
            />
            <div className={classes.info}>
                <Typography variant="h1" style={{ color: "#002966" }}>
                    {props.name}
                    <Divider />
                </Typography>
                <br />
                <Typography variant="h5" >
                    {props.info}
                </Typography>
            </div>
        </Card>
    )
}