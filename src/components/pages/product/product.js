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
import 'react-toastify/dist/ReactToastify.css'

import { productByID } from '../../../data/product_data'

const useStyles = makeStyles(theme => ({
    imageCarousel: {
        width: "20rem",
        height: "30rem",
        [theme.breakpoints.down('sm')]: {
            height: "25rem",
            width: "13rem"
        },
    },
    image: {
        maxWidth: "100%",
        maxHeight: "24rem",
        [theme.breakpoints.down('sm')]: {
            maxHeight: "18rem"
        }
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid",
        borderColor: "#001f3f",
        boxSizing: "border-box",
        height: "25rem",
        [theme.breakpoints.down('sm')]: {
            height: "19rem"
        }
    },
    productInfo: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "center"
        }
    },
    textInfo: {
        width: "50%",
        marginLeft: "0.7rem",
        marginRight: "0.7rem",
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            marginBottom: "1rem"
        }
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
        margin: "0.7rem",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
    },
    descriptionInfo: {
        color: "#545454"
    },
    addButton: {
        background: '#f7c245',
        borderRadius: 3,
        border: 0,
        height: "3rem",
        fontSize: "0.9rem",
        padding: '0 30px',
        "&:hover": {
            backgroundColor: '#ffe675'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.7rem"
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "0.7rem"
        }
    },
    formControl: {
        minWidth: "4rem",
        marginLeft: "1.5rem",
        marginRight: "1.5rem"
    },
    price: {
        fontSize: "1.2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1rem"
        }
    }
}))


export default function Product(props) {
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get('id'))
    const product = productByID[id]
    const classes = useStyles()
    const dispatch = useDispatch()
    const images = product.images.map((image, i) => <div className={classes.imageContainer} key={i}><img src={image} alt="product" className={classes.image} /></div>)
    const [quantity, setQuantity] = useState(1)

    window.scrollTo(0, 0);

    return (
        <React.Fragment>
            <div style={{ position: "relative", minHeight: "80vh" }}>
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
                                    starDimension="1.3rem"
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
            <footer style={{
                bottom: 0,
                width: "100%",
                height: "1rem"
            }}>
                Actual Product: <a target="_blank" rel="noreferrer" href={product.link}>{product.link}</a>
            </footer>
        </React.Fragment>

    )
}