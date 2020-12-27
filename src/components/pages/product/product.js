import React, { useState } from 'react'

import Carousel from 'react-material-ui-carousel'
import {
    makeStyles, Divider,
    Typography, Button,
    FormControl, Select,
    InputLabel, MenuItem
} from '@material-ui/core'
import StarRatings from 'react-star-ratings'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slice/slice'

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
        maxHeight: 380,
        aspectRatio: 3 / 5,
        [theme.breakpoints.down('sm')]: {
            maxHeight: 280
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
        alignItems: "flex-end",
        justifyContent: "center"

    },
    descriptionInfo: {
        color: "#545454"
    },
    addButton: {
        background: '#f7c245',
        borderRadius: 3,
        border: 0,
        height: 48,
        fontSize: "0.9rem",
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px #ffeaba',
        "&:hover": {
            backgroundColor: '#f7c245'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.7rem"
        }
    },
    formControl: {
        minWidth: 70,
        marginLeft: 30,
        marginRight: 30
    },
    price: {
        fontSize: "1.2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1rem"
        }
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        border: "solid",
        borderColor: "#001f3f",
        boxSizing: "border-box",
        height: 400,
        [theme.breakpoints.down('sm')]: {
            height: 300
        }
    }
}))


export default function Product(props) {
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get('id'))
    const product = productByID[id]
    const classes = useStyles()
    const dispatch = useDispatch()
    const images = product.images.map((image, i) => <div className={classes.imageContainer}><img src={image} alt="product" key={i} className={classes.image} /></div>)
    const [quantity, setQuantity] = useState(1)
    return (
        <React.Fragment>
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
                            <Typography className={classes.price}>
                                Price: ${product.price.toFixed(2)}
                            </Typography>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="quantity-label">Qty.</InputLabel>
                                <Select
                                    labelId="quantity-label"
                                    id="quantity-select"
                                    value={quantity}
                                    onChange={event => { setQuantity(event.target.value) }}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>

                            <Button
                                variant="outlined"
                                className={classes.addButton}
                                onClick={() => {
                                    dispatch(addToCart({ id: id, quantity: quantity }))
                                }}
                            ><b>ADD TO CART</b></Button>
                        </div>
                        <Divider />
                        <br />
                        <div className={classes.descriptionInfo}>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{marginTop: 100}}>
                Actual Product: <a target="_blank" rel="noreferrer" href={product.link}>{product.link}</a>
            </footer>
        </React.Fragment>

    )
}