import React from 'react'
import {
    Card, Typography, makeStyles,
    Divider, CardActionArea
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        height: 200,
        width: 700,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            height: 180,
            width: 500
        },
        [theme.breakpoints.down('xs')]: {
            height: 180,
            width: "100%"
        },
    },
    contents: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    image: {
        height: "80%",
        width: 100,
        [theme.breakpoints.down('sm')]: {
            width: 80,
            height: "80%"
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
    let name = props.name
    if (name.length > 40)
        name = name.slice(0, 38) + '...'
    let info = props.info
    if (info.length > 200)
        info = info.slice(0, 198) + '...'
    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea className={classes.contents}>
                <img src={props.coverImage} alt="product" className={classes.image} />
                <div className={classes.info}>
                    <Typography variant="h1" gutterBottom>
                        {name}
                        <Divider />
                    </Typography>
                    <Typography variant="h5" color="textSecondary">
                        {info}
                    </Typography>
                </div>
            </CardActionArea>
        </Card>
    )
}