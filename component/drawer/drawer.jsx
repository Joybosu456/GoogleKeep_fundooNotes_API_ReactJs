import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {connect} from 'react-redux'
import Header from '../header/Header';

const drawerWidth = 240;
const margin = 99;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: margin,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});


const closedMixin = (theme) => ({
    marginTop: margin,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

 function MiniDrawer(props) {
    const [drawerOpen, setdeawerOpen] = React.useState(false)
    const theme = useTheme();

    const handelArchive=()=>{
        props.listenToArchiveNote('ArchiveNote')
    }
    const handelDelete=()=>{
        props.listenToDeleteNote('DeleteNote')
    }
    const hanelNote=()=>{
        props.listenToNote('Note')
    }

    const noteChoice=(typeOfNote)=>{
        props.dispatch({type:`${typeOfNote}`})
        props.listenToSideNavBer(typeOfNote)
    }

    const listenToHeader = () => {
        setdeawerOpen(!drawerOpen)
    }

    return (
        <Box style={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar style={{background:'white'}}>
                <Header listenToHeader={listenToHeader}/>
            </AppBar>
            <Drawer variant='permanent' open={drawerOpen}>
                <List>
                    {/* <ListItem button onClick={hanelNote}> */}
                    <ListItem button onClick={()=>noteChoice('notes')}>
                        <ListItemIcon>
                            <LightbulbIcon />
                        </ListItemIcon>
                        <ListItemText primary='Notes' />
                    </ListItem>
                    {/* <ListItem button> */}
                    <ListItem button onClick={()=>noteChoice('reminders')}>
                        <ListItemIcon>
                            <CircleNotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary='Reminders' />
                    </ListItem>
                    {/* <ListItem button> */}
                    <ListItem button onClick={()=>noteChoice('edit labels')}>
                        <ListItemIcon>
                            <ModeEditIcon />
                        </ListItemIcon>
                        <ListItemText primary='Edit labels' />
                    </ListItem>
                    {/* <ListItem button onClick={handelArchive}> */}
                    <ListItem button onClick={()=>noteChoice('archive')}>
                        <ListItemIcon>
                            <ArchiveIcon />
                        </ListItemIcon>
                        <ListItemText primary='Archive' />
                    </ListItem>
                    {/* <ListItem button onClick={handelDelete}> */}
                    <ListItem button onClick={()=>noteChoice('trash')}>
                        <ListItemIcon>
                            <DeleteOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary='Trash' />
                    </ListItem>
                </List>
            </Drawer>
        </Box>

    );
}

export default connect()(MiniDrawer)
