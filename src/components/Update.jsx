// import React from 'react'
import { useContext, useState } from "react";
import { BooksContext } from "../context/Books"

function Update() {
  const { UpdateBooks } = useContext(BooksContext);
  const [bookInfo, setBookInfo] = useState({});

 function ChangeInput (event){
  const {name, value} = event.target
  setBookInfo({...bookInfo, [name]: value})
  
 }
  function SubmitBtn(event) {
    event.preventDefault()
    UpdateBooks(bookInfo.id, bookInfo);
    setBookInfo({ title: "", author: "" });
  };

  return (
    <>
      <h1>Update Page</h1>
      <form onSubmit={SubmitBtn}>

        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={bookInfo.title} onChange={ChangeInput}/>
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={bookInfo.author} onChange={ChangeInput}/>
        </div>

        <button type="submit">Update Book</button>
      </form>
    </>
  )
}

export default Update
