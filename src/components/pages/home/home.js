import React from 'react'
import {
    Card, Typography, CardMedia,
    CardContent, makeStyles, CardActionArea
} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'



const useStyles = makeStyles((theme) => ({
    root: {
        width: 900,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        height: 500
    },
}));


export default function Home() {
    const classes = useStyles()
    const items = [
        {
            title: "Welcome!",
            description: "Please check out the About page located in the sidebar menu at the top left corner to find out what this site is about.",
            image: "https://images.ctfassets.net/eh05n0xjhplz/1Wcljis3B3iqDgFQnDjxe8/18e0f9ed84b6382ddfaef8de34b6469b/Getting_Started_with_Calendly.jpg",
        },
        {
            title: "Discount Event",
            description: "Enjoy 50% off your first 5 purchaces!",
            image: "https://www.truxxx.com/wp-content/uploads/download-50-off-discount-offer-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-50-Off-PNG-File-Download-Free.png",
        }
    ]
    return (
        <React.Fragment>
            <br />
            <Carousel className={classes.root}>
                {items.map((item, i) => <Item item={item} key={i} />)}
            </Carousel>
        </React.Fragment>
    )
}


function Item(props) {
    return (
        <Card variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.item.title}
                    height="300"
                    width="100%"
                    image={props.item.image}
                    title={props.item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="h2" style={{ height: 50 }}>
                        {props.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
