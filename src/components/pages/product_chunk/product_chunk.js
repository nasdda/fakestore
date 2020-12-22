import React from 'react'
import {
    Card, Typography, makeStyles,
    Divider, CardActionArea, Box
} from '@material-ui/core'
import StarRatings from 'react-star-ratings';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 200,
        width: 900,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            height: 200,
            width: 700
        },
        [theme.breakpoints.down('xs')]: {
            height: 210,
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
        width: 150,
        [theme.breakpoints.down('sm')]: {
            width: 130,
            height: "80%"
        },
        marginLeft: 30
    },
    info: {
        margin: "auto",
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 5,
    },
    details: {
        marginTop: 10
    },
    specifics: {
        overflow: "hidden",
        height: 130,
        [theme.breakpoints.down('xs')]: {
            height: 150
        }
    },
    name: {
        height: '1em',
        overflow: "hidden",
    }

}));

export default function ProductChunk(props) {
    const classes = useStyles()
    let name = props.data.productName
    let info = props.data.description
    const rating = parseFloat(props.data.ratingScore)
    const price = parseFloat(props.data.price).toFixed(2)
    return (
        <React.Fragment>
            <Card className={classes.root} variant="outlined">
                <CardActionArea className={classes.contents}>
                    <img src={props.data.images[0]} alt="product" className={classes.image} />
                    <div className={classes.info}>
                        <div className={classes.specifics}>
                            <Box my={1}>
                                <Typography variant="h1" className={classes.name}>
                                    {name}
                                </Typography>
                            </Box>
                            <Divider />
                            <Typography variant="h5" color="textSecondary" display="block">
                                {info}
                            </Typography>
                        </div>
                        <div className={classes.details}>
                            <StarRatings numberOfStars={5}
                                name='rating'
                                rating={rating}
                                starDimension="25"
                                starRatedColor="orange"
                            />
                            <h2>${price}</h2>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
            <Divider />
        </React.Fragment >

    )
}