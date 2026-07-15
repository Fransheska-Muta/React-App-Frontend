// import React from 'react'
// this should be a form to create a new book.

import { useContext, useState } from "react";
import { BooksContext } from "../context/Books"

function Create() {
 const { CreateBooks } = useContext(BooksContext)
 const [bookInfo, setBookInfo] = useState({})

 function ChangeInput (event){
  const {name, value} = event.target
  setBookInfo({...bookInfo, [name]: value})
  
 }

 function SubmitBtn(event) {
  event.preventDefault()
  CreateBooks(bookInfo)
  setBookInfo({title: "", author:""})
 }

  return (
    <>
      <h1>Create page</h1>
      <form onSubmit={SubmitBtn}>

        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={bookInfo.title} onChange={ChangeInput}/>
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={bookInfo.author} onChange={ChangeInput} />
        </div>

        <button type="submit">Create A New Book</button>
      </form>
    </>
  )
}

export default Create
