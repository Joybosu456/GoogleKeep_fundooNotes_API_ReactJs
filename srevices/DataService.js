import axios from "axios"

const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export const getNotes=()=>{
    let response=axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    return response
}

export const addNotes=(obj)=>{
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",obj,headerConfig)
    return response
}

export const changeColor=(obj)=>{
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",obj,headerConfig)
    return response
}
export const updateArchive=(obj)=>{
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",obj,headerConfig)
    return response
}
export const updateNote=(obj)=>{
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",obj,headerConfig)
    return response
}
export const noteDeleted=(obj)=>{
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",obj,headerConfig)
    return response
}