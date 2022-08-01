import React, { useState } from 'react'
import TakeNoteOne from '../takenote-one/TakeNote-One'
import TakeNoteTwo from '../takenote-two/TakeNote-Two'
import Header from '../header/Header'
import './Dashbord.css'
import { getNotes } from '../../srevices/DataService'
import { Container } from '@mui/material'
import TakeNoteThree from '../takenote-three/TakeNote-Three'
import Box from '@mui/material/Box';
import MiniDrawer from '../drawer/drawer'
import { Grid } from '@mui/material'

function Dashbord() {

    const [note, setNote] = React.useState(true)
    const [allnotes, setAllnotes] = React.useState([])
    // const [drawerOpen, setdeawerOpen] = React.useState(false)
    const [switchNote, setswitchNote] = React.useState('notes')



    // const listenToHeader = () => {
    //     setdeawerOpen(!drawerOpen)
    // }

    const listenToSideNavBer=(noteChoice)=>{
        setswitchNote(noteChoice)
    }
    const listentoTakeNoteTwo = () => {
        setNote(true)
    }
    const listentoTakeNoteOne = () => {
        setNote(false)
    }
    const listentoTakeNoteThree = () => {
        GetNotes()
    }

    const listenToArchiveNote = (data) => {
        console.log(data)
        setswitchNote(data)
    }
    const listenToDeleteNote = (data) => {
        console.log(data)
        setswitchNote(data)
    }

    const listenToNote = (data) => {
        setswitchNote(data)
    }

    console.log(switchNote)
    React.useEffect(() => {
        GetNotes()
    }, [note, switchNote])

    const noteList = allnotes.map(note =>
        <Grid item> <TakeNoteThree listentoTakeNoteThree={listentoTakeNoteThree} note={note} /></Grid>)


    const GetNotes = () => {
        getNotes()
            .then((resp) => {
                console.log(resp);
                let filterArray = resp.data.data.data.filter(function (note) {
                    if (switchNote == 'notes') {
                        if (note.isArchived == false && note.isDeleted == false) {
                            return note
                        }
                    }
                    if (switchNote == 'archive') {
                        if (note.isArchived == true && note.isDeleted == false) {
                            return note
                        }
                    }
                    if (switchNote == 'trash') {
                        if (note.isArchived == false && note.isDeleted == true) {
                            return note
                        }
                    }

                })
                console.log(filterArray)
                setAllnotes(filterArray)
            })
            .catch((error) => { console.log(error) })
    }


    return (
        <div>
            {/* <Header listenToHeader={listenToHeader} /> */}

            <div className="takenote-cont">
                {note ? <TakeNoteOne listentoTakeNoteOne={listentoTakeNoteOne} /> : <TakeNoteTwo listentoTakeNoteTwo={listentoTakeNoteTwo} />}
            </div>
            <Container className='takeThree'>
                <Grid  container={true} spacing={3} className="designTakeNoteThree">
                    {
                        noteList
                    }
                </Grid>
            </Container>

            <div>
                <MiniDrawer  listenToSideNavBer={listenToSideNavBer} listenToArchiveNote={listenToArchiveNote} listenToDeleteNote={listenToDeleteNote} listenToNote={listenToNote} />
            </div>

        </div>
    )
}

export default Dashbord;