// import React from 'react'

import { useContext, useState } from "react";
import { BooksContext } from "../context/Books"

function Delete() {
  const { DeleteBooks } = useContext(BooksContext);
  const [bookId, setBookId] = useState("");

  function ChangeInput (event){
    setBookId(event.target.value);
  }

  function SubmitBtn(event) {
    event.preventDefault()
    DeleteBooks(bookId)
    setBookId("")
  }

  return (
    <>
        <h1>Delete page</h1>
        <form onSubmit={SubmitBtn}>

          <div>
            <label htmlFor="bookId">Book ID:</label>
            <input type="text" id="bookId" name="bookId" value={bookId} onChange={ChangeInput}/>
          </div>

          <button type="submit">Delete Book</button>
        </form>
    </>
  )
}

export default Delete
