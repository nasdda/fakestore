import React from 'react'
import {
    Card, Typography,
    CardContent, makeStyles,

} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'
import { closeDrawer } from '../../../redux/slice/slice'
import { useDispatch } from 'react-redux'

import arrow from './images/arrow.png'
import welcome from './images/welcome.jpg'
import clothes1 from './images/clothesmove.jpg'
import clothes2 from './images/clothescarasoul.jpg'
import electronics1 from './images/electronicsmove.jpeg'
import electronics2 from './images/electronicscarasoul.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        width: "50rem",
        height: "32rem",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "40rem",
            height: "30rem"
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: "28rem"
        },
    },
    cardImage: {
        height: "20rem",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            height: "18rem"
        },
        [theme.breakpoints.down('xs')]: {
            height: "15rem"
        }
    },
    nav: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    centered: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        userSelect: "none",
        "&:hover": {
            cursor: "pointer"
        },
        color: "white",
        fontSize: "3rem",
    },
    container: {
        position: "relative",
        left: 0,
        top: 0,
        width: "30rem",
        height: "20rem",
        margin: "1.5rem",
        [theme.breakpoints.down("xs")]: {
            margin: 0,
            width: "100%",
            height: undefined
        }
    },
    a: {
        position: "relative",
        top: 0,
        left: 0,
        aspectRatio: 3 / 5,
        width: "100%",
        height: "100%",
    },
    arrowLeft: {
        position: "absolute",
        top: 0,
        left: 0,
        aspectRatio: 3 / 5,
        width: "100%",
        height: "100%",
        opacity: 0,
        "&:hover": {
            opacity: 0.5,
            cursor: "pointer"
        },
    },
    arrowRight: {
        transform: "rotate(180deg)",
        position: "absolute",
        top: 0,
        left: 0,
        aspectRatio: 3 / 5,
        width: "100%",
        height: "100%",
        opacity: 0,
        "&:hover": {
            opacity: 0.5,
            cursor: "pointer"
        },
    }
}))


const carasoul_images = [welcome, electronics2, clothes2]

export default function Home() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleClick = event => {
        window.scrollTo(0, 0);
        dispatch(closeDrawer())
    }
    const items = [
        {
            title: "Welcome!",
            description: "Please check out the About page located in the sidebar menu at the top left corner to find out what this site is about",
            image: 0
        },
        {
            title: "Electronics Section",
            description: "The Electronics section is now available",
            image: 1
        },
        {
            title: "Clothing & Fashion Section",
            description: "The Clothing & Fashion section is now available",
            image: 2
        }
    ]
    return (
        <React.Fragment>
            <br />
            <Carousel className={classes.root}>
                {items.map((item, i) => <Item item={item} key={i} />)}
            </Carousel>

            <div className={classes.nav}>

                <div className={classes.container}>
                    <Link to="/electronics" onClick={handleClick}>
                        <img
                            src={electronics1}
                            alt="electronics"
                            className={classes.a}
                        />
                        <div className={classes.centered}>Electronics</div>
                        <img
                            src={arrow}
                            alt="out"
                            className={classes.arrowLeft}
                        />
                    </Link>
                </div>


                <div className={classes.container} onClick={handleClick}>
                    <Link to="/clothing-and-fashion">
                        <img
                            src={clothes1}
                            alt="clothing and fashion"
                            className={classes.a}
                        />
                        <div className={classes.centered}>Clothing & Fashion</div>
                        <img
                            src={arrow}
                            alt="out"
                            className={classes.arrowRight}
                        />
                    </Link>
                </div>

            </div>
        </React.Fragment>
    )
}


function Item(props) {
    const classes = useStyles()
    return (
        <Card variant="outlined">
            <img
                alt={props.item.title}
                src={carasoul_images[props.item.image]}
                className={classes.cardImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h1">
                    {props.item.title}
                </Typography>
                <Typography variant="h5" color="textSecondary" style={{ height: "3rem" }}>
                    {props.item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
