import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../../redux/slice/slice'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
    },
    title: {
        textDecoration: 'none',
        color: "inherit",
        flexGrow: 1
    },
    menuIcons: {
        display: "flex"
    },
    menuOuter: {
        width: 130,
    },
    link: {
        color: "inherit",
        textDecoration: 'none',
    },
    offset: theme.mixins.toolbar,
}));

export default function Navbar(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <div className={classes.root}>
            <AppBar position={props.position} color="default">
                <Toolbar>
                    <div className={classes.menuOuter}>
                        <Tooltip title="Show Sidebar">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => dispatch(toggleDrawer())}>
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <NavLink to='/' className={classes.title}>
                        <Typography variant="h6">
                            <span style={{ fontFamily: "BlackChancery", fontWeight: "bold", fontSize: 36 }}>Fake Store</span>
                        </Typography>
                    </NavLink>
                    <div className={classes.menuOuter}>
                        <NavLink to='/cart' className={classes.link}>
                            <IconButton
                                color="inherit">
                                <ShoppingCartIcon />
                            </IconButton>
                        </NavLink>
                        <NavLink to='/account' className={classes.link}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}