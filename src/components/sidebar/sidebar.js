import React from 'react'
import { selectOpen, toggleDrawer } from '../../redux/slice/slice'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterListIcon from '@material-ui/icons/FilterList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InfoIcon from '@material-ui/icons/Info';


const drawerWidth = 280;

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
        // necessary for content to be below app bar
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
}));


export default function Sidebar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const open = useSelector(selectOpen)
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
                    <IconButton onClick={() => dispatch(toggleDrawer())}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key="Filter">
                        <ListItemIcon><FilterListIcon /></ListItemIcon>
                        <ListItemText primary={"Filter"} />
                    </ListItem>
                    <ListItem button key="Clothing & Fashion">
                        <ListItemIcon><CategoryIcon /></ListItemIcon>
                        <ListItemText primary={"Clothing & Fashion"} />
                    </ListItem>
                    <ListItem button key="Technologies">
                        <ListItemIcon><CategoryIcon /></ListItemIcon>
                        <ListItemText primary={"Technologies"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Account">
                        <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                        <ListItemText primary={"Account"} />
                    </ListItem>
                    <ListItem button key="Balance">
                        <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                        <ListItemText primary={"Balance"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="About">
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary={"About"} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}




// export default function Sidebar() {

//     return (
//         <div>
//             <Drawer anchor='left' open={open} />
//             <button onClick={() => dispatch(toggleDrawer())}>Open</button>
//         </div>
//     )
// }