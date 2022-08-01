import React from "react";
import './TakeNote-Three.css'
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import OutlinedInput from '@mui/material/OutlinedInput';
import PushPinIcon from '@mui/icons-material/PushPin';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PaletteIcon from '@mui/icons-material/Palette';
import PhotoIcon from '@mui/icons-material/Photo';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import { Button, InputBase } from "@mui/material";
//import { Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ColorPopper from "../colorpopper/colorpopper";
import { noteDeleted, updateArchive } from '../../srevices/DataService'
import Modal from '@mui/material/Modal';
import { updateNote } from "../../srevices/DataService";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function TakeNoteThree(props) {
    const [editNoteObj, setEditNoteObj] = React.useState({ title: "", description: "", noteId: props.note.id })

    const [open, setOpen] = React.useState(false);

    const listenToColorUpdate = () => {
        props.listentoTakeNoteThree()
    }
    const updateTitle = (event) => {
        setEditNoteObj(prevState => ({ ...prevState, title: event.target.value }))
    }
    const updateDescription = (event) => {
        setEditNoteObj(prevState => ({ ...prevState, description: event.target.value }))
    }
    const notesUpdate = () => {
        updateNote(editNoteObj)
            .then((resp) => { console.log(resp) })
            .catch((error) => { console.log(error) })
    }
    const updateNoteArchive = () => {
        let obj = {
            noteIdList: [props.note.id],
            isArchived: true

        }
        updateArchive(obj)
            .then((resp) => { console.log(resp); })
            .catch((error) => { console.log(error) })
    }
    const noteDelete = () => {
        let obj = {
            noteIdList: [props.note.id],
            isDeleted: true
        }
        noteDeleted(obj)
            .then((resp) => { console.log(resp) })
            .catch((error) => { console.log(error) })
    }

    const handleOpen = (noteObj) => {
        setEditNoteObj({ ...editNoteObj, title: noteObj.title, description: noteObj.description, noteId: noteObj.id })
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    /*const handleClick = () => {
        props.listenToNote()
    }*/

    return (

        <div className='takeThreeMedia'>

            <Box style={{ backgroundColor: props.note.color }} className="takeNoteThreecontainer">
                <Box className="takeNoteThreecontainerSecOne">
                    <Box><InputBase onClick={() => handleOpen(props.note)} placeholder={props.note.title} style={{ backgroundColor: props.note.color }} /></Box>
                    <Box><PushPinIcon htmlColor="grey" /></Box>
                </Box>
                <Box className="takeNoteThreecontainerSecTwo">
                    <Box><InputBase onClick={() => handleOpen(props.note)} placeholder={props.note.description} style={{ backgroundColor: props.note.color }} /></Box>
                </Box>
                <Box className="takeNoteThreecontainerSecThree">
                    <Box className="takeNoteThreecontainerSubOne">
                        <Box><NotificationAddIcon fontSize="medium" htmlColor="grey" /></Box>
                        <Box><PersonAddAltIcon fontSize="medium" htmlColor="grey" /></Box>
                        <Box><ColorPopper action='update' id={props.note.id} listenToColorUpdate={listenToColorUpdate} /></Box>
                        <Box><PhotoIcon fontSize="medium" htmlColor="grey" /></Box>
                        <Box><ArchiveIcon onClick={updateNoteArchive} fontSize="medium" htmlColor="grey" /></Box>
                        <Box><DeleteOutlineIcon onClick={noteDelete} /></Box>
                        <Box><MoreVertIcon fontSize="medium" htmlColor="grey" /></Box>
                    </Box>
                </Box>
            </Box>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                {/*<ClickAwayListener onClickAway={handleClick}>*/}
                <Box sx={{ ...style, width: 600 }}>

                    <Box className="takeNoteThreecontainerSecOne">
                        <Box>
                            <InputBase type="text" defaultValue={props.note.title} onChange={updateTitle} />
                        </Box>
                        <PushPinIcon htmlColor="grey" />
                    </Box>
                    <Box className="takeNoteThreecontainerSecTwo">
                        <Box><InputBase type="text" defaultValue={props.note.description} onChange={updateDescription} /></Box>
                    </Box>
                    <Box className="takeNoteThreecontainerSecThree">
                        <Box className="takeNoteThreecontainerSubOne">
                            <Box><NotificationAddIcon fontSize="medium" htmlColor="grey" /></Box>
                            <Box><PersonAddAltIcon fontSize="medium" htmlColor="grey" /></Box>
                            <Box><ColorPopper action='update'/></Box>
                            <Box><PhotoIcon fontSize="medium" htmlColor="grey" /></Box>
                            <Box><ArchiveIcon fontSize="medium" htmlColor="grey" /></Box>
                            <Box><MoreVertIcon fontSize="medium" htmlColor="grey" /></Box>
                        </Box>
                        <Box className="notesUpdateButton" onClick={notesUpdate}><button type="submit">Close</button></Box>
                    </Box>
                </Box>
                {/*</ClickAwayListener>*/}
            </Modal>

        </div>


    );
}

export default TakeNoteThree;
