import React from "react";
import './TakeNote-Two.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import OutlinedInput from '@mui/material/OutlinedInput';
import PushPinIcon from '@mui/icons-material/PushPin';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PaletteIcon from '@mui/icons-material/Palette';
import PhotoIcon from '@mui/icons-material/Photo';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Button, InputBase } from "@mui/material";
import ColorPopper from "../colorpopper/colorpopper";
import { addNotes } from "../../srevices/DataService";
import UndoTwoToneIcon from '@mui/icons-material/UndoTwoTone';
import RedoTwoToneIcon from '@mui/icons-material/RedoTwoTone';


function TakeNoteTwo(props) {

    const [note, setNote] = React.useState({ title: "", description: "", color: '',isArchived:false })

    //const[colorObj,setColorObj]=React.useState({color:''})

    const clickme = () => {

        addNotes(note)
            .then((resp) => { console.log(resp); props.listentoTakeNoteTwo() })
            .catch((error) => { console.log(error)})
    };
    const archiveNote=()=>{
        setNote(prevState=>({...prevState,isArchived:true}))
    }

    /*const clickme = () => {
       addNotes(note).then((resp)=>{console.log(resp)}).catch((error)=>{console.log(error)})
    };*/
    const handleClickAway = () => {
        props.listentoTakeNoteTwo()
    }

    const listenToColorPopper = (color) => {
        console.log(color);
        setNote(prevState=>({...prevState, color: color }))
    }
    const takeTitle = (event) => {
        setNote(prevState=>({...prevState, title: event.target.value }))
    }
    const takeDescription = (event) => {
        setNote(prevState=>({...prevState, description: event.target.value }))
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div >
                <Box className="takeNoteTwocontainer" style={{ backgroundColor: note.color }}>
                    <Box className="takeNoteTwocontainerSecOne">
                        <Box><InputBase onChange={takeTitle} placeholder="Title" style={{ backgroundColor: note.color }} /></Box>
                        <Box><PushPinIcon htmlColor="grey" /></Box>
                    </Box>
                    <Box className="takeNoteTwocontainerSecTwo">
                        <Box><InputBase onChange={takeDescription} placeholder="Take a note" style={{ backgroundColor: note.color }} /></Box>
                    </Box>
                    <Box className="takeNoteTwocontainerSecThree">
                        <Box className="takeNoteTwoSubcontainerSecOne">

                            <Box><NotificationAddIcon fontSize="medium" htmlColor="grey" /></Box>
                            <Box><PersonAddAltIcon fontSize="medium" htmlColor="grey" /></Box>
                            <ColorPopper listenToColorPopper={listenToColorPopper} action='create'/>
                            <Box>< PhotoIcon fontSize="medium" htmlColor="grey" /></Box>
                            <Box><ArchiveIcon onClick={archiveNote} fontSize="medium" htmlColor="grey" /></Box>
                            <Box><MoreVertIcon fontSize="medium" htmlColor="grey" /></Box>
                            <Box><UndoTwoToneIcon/></Box>
                            <Box><RedoTwoToneIcon /></Box>
                        </Box>
                        <Box className="takeNoteTwoSubcontainerSecTwo">
                            <button type="submit" onClick={clickme}>Close</button>
                        </Box>
                    </Box>
                </Box>
            </div>
        </ClickAwayListener>

    );
}

export default TakeNoteTwo;
