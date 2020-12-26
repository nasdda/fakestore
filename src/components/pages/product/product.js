import React from 'react'

import Carousel from 'react-material-ui-carousel'
import {
    makeStyles, Divider,
    Typography, Button
} from '@material-ui/core'
import StarRatings from 'react-star-ratings'

import { productByID } from '../../../data/product_data'

const useStyles = makeStyles(theme => ({
    imageCarousel: {
        width: 300,
        height: 500,
        [theme.breakpoints.down('sm')]: {
            height: 350,
            width: 200
        }
    },
    image: {
        width: "100%",
        height: 400,
        border: "solid",
        borderColor: "#001f3f",
        boxSizing: "border-box",
        [theme.breakpoints.down('sm')]: {
            height: 250
        }
    },
    productInfo: {
        display: "flex",
        justifyContent: "center",
    },
    textInfo: {
        width: "50%",
        marginLeft: 10,
        marginRight: 10
    },
    name: {
        fontSize: "1.3rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1rem"
        }
    },
    scoreInfo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    pricingInfo: {
        margin: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    descriptionInfo: {
        color: "#545454"
    },
    addButton: {
        marginLeft: 20,
        background: '#f7c245',
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px #ffeaba',
        "&:hover": {
            backgroundColor: '#f7c245'
        }
    },
}))


export default function Product(props) {
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get('id'))
    const product = productByID[id]
    const classes = useStyles()
    const images = product.images.map((image, i) => <img src={image} alt="product" key={i} className={classes.image} />)
    return (
        <div>
            <br />
            <div className={classes.productInfo}>
                <Carousel className={classes.imageCarousel}>
                    {images}
                </Carousel>
                <div className={classes.textInfo}>
                    <h2 className={classes.name}>{product.productName}</h2>
                    <Divider />
                    <div className={classes.scoreInfo}>
                        <div style={{ marginRight: 10 }}>
                            <StarRatings numberOfStars={5}
                                name='rating'
                                rating={product.ratingScore}
                                starDimension="20"
                                starRatedColor="orange"
                            />
                        </div>
                        <Typography>{product.ratingScore}/5 | {product.ratingCount} votes</Typography>
                    </div>
                    <Divider />
                    <div className={classes.pricingInfo}>
                        <Typography style={{ fontSize: "1.2rem" }}>
                            Price: ${product.price.toFixed(2)}
                        </Typography>
                        <Button variant="raised" className={classes.addButton}><b>ADD TO CART</b></Button>
                    </div>
                    <Divider />
                    <br />
                    <div className={classes.descriptionInfo}>
                        {product.description}
                    </div>
                </div>
            </div>
            <div>Actual Product: <a target="_blank" rel="noreferrer" href={product.link}>{product.link}</a></div>
        </div>
    )
}