import React from "react";
import './TakeNote-One.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import OutlinedInput from '@mui/material/OutlinedInput';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

import { Button } from "@mui/material";


function TakeNoteOne(props) {

    const clickMeOne=()=>{
     props.listentoTakeNoteOne()
    };

    return (
        <div>

            <Box className='takeNoteOnecontainer' onClick={clickMeOne}>
                <Box className='note-item'>Take a note...</Box>
                <Box className='iconsfields'>
                    <Box><CheckBoxOutlinedIcon htmlColor="grey" /></Box>
                    <Box><BrushOutlinedIcon htmlColor="grey" /></Box>
                    <Box><InsertPhotoOutlinedIcon htmlColor="grey" /></Box>
                </Box>
            </Box>
        </div>

    );
}

export default TakeNoteOne;
