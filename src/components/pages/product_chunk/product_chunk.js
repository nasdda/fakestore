import React from 'react'
import {
    Typography, makeStyles, Card,
    Divider, CardActionArea, 
} from '@material-ui/core'
import StarRatings from 'react-star-ratings';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        height: 230,
        width: 900,
        [theme.breakpoints.down('sm')]: {
            height: 250,
            width: 600
        },
        [theme.breakpoints.down('xs')]: {
            height: 250,
            width: "100%"
        },
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        marginBottom: 30,
    },
    outer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: 0,
        padding: 10
    },
    image: {
        height: "70%",
        width: 150,
        [theme.breakpoints.down('sm')]: {
            height: "60%"
        },
        margin: 10
    },
    name: {
        display: "block",
        maxWidth: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: "2em"
    },
    description: {
        maxHeight: 80,
        overflow: "hidden"
    }
}));

export default function ProductChunk(props) {
    const classes = useStyles()
    let name = props.data.productName
    let info = props.data.description
    const rating = parseFloat(props.data.ratingScore)
    const price = parseFloat(props.data.price).toFixed(2)
    
    return (
        <Card className={classes.root} variant="outlined">
            <img src={props.data.images[0]} alt="product" className={classes.image} />
            <CardActionArea className={classes.outer}>
                <Typography variant="h1" className={classes.name}>
                    {name}
                </Typography>
                <Typography variant="h5" color="textSecondary" display="block" className={classes.description}>
                    {info}
                </Typography>
                <div>
                    <StarRatings numberOfStars={5}
                        name='rating'
                        rating={rating}
                        starDimension="20"
                        starRatedColor="orange"
                    />
                    <h2>${price}</h2>
                </div>
            </CardActionArea>
            <Divider />
        </Card>
    )
}