import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Notes from '../components/Notes'
import NoteModal from '../components/NoteModal'
import {get, post, put} from '../../services/ApiEndPoint'
import toast from 'react-hot-toast'
import UpdateModal from '../components/UpdateModal'

export default function Home() {
    const [notes, setNotes] = useState([])
    const [title, setTtle] = useState("")
    const [updatenote, setUpdatenote] = useState('')
    const [refresh, setRefresh] = useState(false)
    const [notesid, setNoteId]= useState('')
    if(notes){
        console.log('res', notes)
    }
    useEffect(()=>{
        const getnotes= async() => {
            try {
                const request= await get('/notes/GetNotes')
                const response = request.data
                setNotes(response.Notes)
                console.log('res', response)
            } catch (error) {
                console.log(error)
            }
        }
        getnotes()
    },[refresh])
    
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
      const handleCreateNote=async ()=>{
        try {
            const request= await post("/notes/createnote", {title})
            const response = request.data
            if(response.succcess){
                toast.success(response.message)
                setRefresh(true)
            }
            console.log("createnoteResponser", response)
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message)
              }
            console.log(error)

        }
      }
      const handleUpdateNote=async()=>{
        try {
            const request = await put(`/notes/updateNotes/`,{title})
        } catch (error) {
            
        }
      }

  return (
    <>
    <NoteModal title={'Create Note'} value={title} handelTitleChange={(e)=>setTtle(e.target.value)} handleCreateNote= {handleCreateNote}/>
    <UpdateModal title={"Update Notes"} value={updatenote} handelTitleChange={(e)=> setUpdatenote(e.target.value)} handleUpdateNote={handleUpdateNote}></UpdateModal>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-lg-10 col-md-10'>
                <Navbar/>
                <div className='mt-3 mx-5'>
                    <h1 className='fs-2 fw-bold'>NOTES</h1>
                </div>
                <div className='row mt-4 mx-5'>
                    {notes && notes.atmap((elem) => {
                        return(
                            <div className='col-md-4 mb-5 col-lg-4'>
                                <Notes date={formatDate(elem.createdAt)} title={elem.title} ></Notes>
                            </div>
                        )
                    })}
                    
                </div>
            </div> 
        </div>
    </div>
    </>
  )
}
