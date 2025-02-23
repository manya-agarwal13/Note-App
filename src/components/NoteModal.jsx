import React from 'react'

export default function NoteModal({title,handelTitleChange, value}) {
  return (
    <>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form class="form-floating">
  <input type="email" class="form-control" id="floatingInputValue"  value={value} onChange={handelTitleChange}/>
  <label for="floatingInputValue">Enter Your Notes</label>
</form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-dark" onClick={handleCreateNote}>Save changes</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
