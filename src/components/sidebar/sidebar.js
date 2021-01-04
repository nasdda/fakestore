import React from 'react'
import { selectOpen, toggleDrawer, closeDrawer } from '../../redux/slice/slice'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom'

const drawerWidth = "17rem"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));


export default function Sidebar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const open = useSelector(selectOpen)
    const handleClick = event => {
        dispatch(closeDrawer())
    }
    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Tooltip title="Hide Sidebar">
                        <IconButton onClick={() => dispatch(toggleDrawer())}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <Divider />
                <List>
                    <NavLink to="/" className={classes.link} onClick={handleClick}>
                        <ListItem button key="Home">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/electronics" className={classes.link} onClick={handleClick}>
                        <ListItem button key="Electronics">
                            <ListItemIcon><CategoryIcon /></ListItemIcon>
                            <ListItemText primary="Electronics" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/clothing-and-fashion" className={classes.link} onClick={handleClick}>
                        <ListItem button key="Clothing & Fashion">
                            <ListItemIcon><CategoryIcon /></ListItemIcon>
                            <ListItemText primary="Clothing & Fashion" />
                        </ListItem>
                    </NavLink>
                </List>
                <Divider />
                <List>
                    <NavLink to='/account' className={classes.link} onClick={handleClick}>
                        <ListItem button key="Account">
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/balance' className={classes.link} onClick={handleClick}>
                        <ListItem button key="Balance">
                            <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                            <ListItemText primary="Balance" />
                        </ListItem>
                    </NavLink>
                </List>
                <Divider />
                <List>
                    <NavLink to='/about' className={classes.link} onClick={handleClick}>
                        <ListItem button key="About">
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
        </div>
    )
}


