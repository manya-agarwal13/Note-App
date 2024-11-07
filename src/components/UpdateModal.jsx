import React from 'react'
export default function UpdateModal({title,handelTitleChange, value, handleUpdateNote}) {
  return (
  <>
   
   <div className="modal fade " id="updatemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">{title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="form-floating">
  <input type='email' className="form-control h-100   "  id="floatingInputValue" onChange={handelTitleChange} value={value}></input>
  <label for="floatingInputValue">Enter Your Notes</label>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn bg-black text-white"  onClick={handleUpdateNote}>Save changes</button>
      </div>
    </div>
  </div>
</div></>
  )
}