import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer, selectItemCount } from '../../redux/slice/slice'
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
        display: 'flex',
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    link: {
        color: "inherit",
        textDecoration: 'none',
    },
    backButton: {
        transform: "rotate(-180deg)"
    },
    offset: theme.mixins.toolbar,
}));

export default function Navbar(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const itemCount = useSelector(selectItemCount)

    return (
        <div className={classes.root}>
            <AppBar position={props.position} color="default">
                <Toolbar>
                    <div className={classes.menuOuter}>
                        <IconButton onClick={() => window.history.back()}>
                            <DoubleArrowIcon className={classes.backButton} />
                        </IconButton>
                        <Tooltip title="Show Sidebar">
                            <IconButton className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => dispatch(toggleDrawer())}>
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <NavLink to='/' className={classes.title}>
                        <Typography variant="h6">
                            <span style={{ fontFamily: "BlackChancery", fontWeight: "bold", fontSize: "2rem" }}>Fake Store</span>
                        </Typography>
                    </NavLink>
                    <div className={classes.menuOuter}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <div >{itemCount}</div>
                            <NavLink to='/cart' className={classes.link}>
                                <IconButton
                                    color="inherit">
                                    <ShoppingCartIcon />
                                </IconButton>
                            </NavLink>
                        </div>
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