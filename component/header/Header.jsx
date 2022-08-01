
import React from "react";
import './Header.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Forward10Icon from '@mui/icons-material/Forward10';
import RefreshIcon from '@mui/icons-material/Refresh';
import MenuIcon from '@mui/icons-material/Menu';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import AppsIcon from '@mui/icons-material/Apps';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Icon from '@mui/material/Icon';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Box from '@mui/material/Box';
import img1 from "../header/keep.jpg"
import {connect} from 'react-redux'
import { drawerReducer } from "../redux/drawerReducer";

function Header(props) {

    const openDrawer=()=>{
      props.listenToHeader()
    }
    return (
        <div>
            <Box className="main">
                <Box className="firstbox">
                    <Box><DehazeIcon onClick={openDrawer} fontSize="large" htmlColor="grey" /></Box>
                    <Box><img src={img1} alt="" /></Box>
                    <Box><h2 className="keep">{props.title}</h2></Box>
                </Box >
                <Box className="secoundbox">
                    <div class='searchBox'>
                        <button type="submit" class='searchButton'>
                            <SearchIcon fontSize="large" htmlColor="grey" />
                        </button>
                        <input type="text" class='searchField' placeholder="Search" />
                    </div>
                </Box>
                <Box className="thirdbox">
                    <Box ><RefreshIcon fontSize="large" htmlColor="grey" /></Box>
                    <Box ><MenuIcon fontSize="large" htmlColor="grey" /></Box>
                    <Box ><BrightnessLowIcon fontSize="large" htmlColor="grey" /></Box>

                </Box>
                <Box className="forthbox">
                    <Box ><AppsIcon fontSize="large" htmlColor="grey" /></Box>
                    <Box ><PersonPinIcon fontSize="large" htmlColor="grey" /></Box>
                </Box>
            </Box>
        </div>

    );
}

// export default Header;

const mapStateToProps=(state) =>{
    console.log(state)
    return{
        title:state.drawerReducer.title,
    };
};

export default connect(mapStateToProps)(Header)