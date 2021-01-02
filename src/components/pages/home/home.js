import React from 'react'
import {
    Card, Typography,
    CardContent, makeStyles,

} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    root: {
        width: 900,
        height: 500,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    cardImage: {
        height: 300,
        width: "100%",
        [theme.breakpoints.down('md')]: {
            height: 250
        },
        [theme.breakpoints.down('xs')]: {
            height: 200
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
        width: 500,
        height: 300,
        margin: 30,
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


export default function Home() {
    const classes = useStyles()
    const items = [
        {
            title: "Welcome!",
            description: "Please check out the About page located in the sidebar menu at the top left corner to find out what this site is about",
            image: "https://images.ctfassets.net/eh05n0xjhplz/1Wcljis3B3iqDgFQnDjxe8/18e0f9ed84b6382ddfaef8de34b6469b/Getting_Started_with_Calendly.jpg",
        },
        {
            title: "Electronics Section",
            description: "The Electronics section is now available",
            image: "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/05/electronics-.jpg"
        },
        {
            title: "Clothing & Fashion Section",
            description: "The Clothing & Fashion section is now available",
            image: "https://img5.goodfon.com/wallpaper/nbig/0/4d/odezhda-veshalka-ruka.jpg"
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
                    <Link to="/electronics">
                        <img
                            src="https://univers-technologues.com/wp-content/uploads/2018/06/Gadgets-Latest-Electronic-Gadgets.jpg"
                            alt="electronics"
                            className={classes.a}
                        />
                        <div className={classes.centered}>Electronics</div>
                        <img
                            src="https://image.flaticon.com/icons/png/512/120/120900.png"
                            alt="out"
                            className={classes.arrowLeft}
                        />
                    </Link>
                </div>


                <div className={classes.container}>
                    <Link to="/clothing-and-fashion">
                        <img
                            src="https://wtvox.com/wtvox2/wp-content/uploads/2018/07/Feature.jpg"
                            alt="clothing and fashion"
                            className={classes.a}
                        />
                        <div className={classes.centered}>Clothing & Fashion</div>
                        <img
                            src="https://image.flaticon.com/icons/png/512/120/120900.png"
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
                src={props.item.image}
                className={classes.cardImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h1">
                    {props.item.title}
                </Typography>
                <Typography variant="h5" color="textSecondary" style={{ height: 50 }}>
                    {props.item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
