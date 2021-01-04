import React from 'react'
import {
    Typography, makeStyles,
    Card, CardActionArea,
} from '@material-ui/core'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        height: "18rem",
        width: "60rem",
        [theme.breakpoints.down('sm')]: {
            width: "35rem"
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        },
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        marginBottom: "2rem",
    },
    outer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: 0,
        padding: "0.8rem"
    },
    image: {
        height: undefined,
        aspectRatio: 3 / 5,
        maxHeight: "17rem",
        maxWidth: "100%",
        [theme.breakpoints.down('sm')]: {
            maxHeight: "15rem"
        },
        [theme.breakpoints.down('xs')]: {
            maxHeight: "13rem"
        }
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
        maxHeight: "6rem",
        overflow: "hidden"
    },
    link: {
        textDecoration: "none",
        minWidth: 0,
        color: "inherit",
        height: "100%"
    },
    imageOuter: {
        minWidth: "13rem",
        maxWidth: "13rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            minWidth: "10rem",
            maxWidth: "10rem",
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: "8rem",
            maxWidth: "8rem",
        }
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

            <div className={classes.imageOuter}>
                <Link to={`/product?id=${props.data.id}`}>
                    <img src={props.data.images[0]} alt="product" className={classes.image} />
                </Link>
            </div>
            <Link to={`/product?id=${props.data.id}`} className={classes.link}>
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
                            starDimension="1.3rem"
                            starRatedColor="orange"
                        />
                        <h2>${price}</h2>
                    </div>
                </CardActionArea>
            </Link>
        </Card>
    )
}