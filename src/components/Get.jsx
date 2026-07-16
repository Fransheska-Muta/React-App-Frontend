// import React from 'react'

import { BooksContext } from "../context/Books"
import { useContext } from "react"

function Get() {
  const { books } = useContext(BooksContext)
  // console.log(books);
  
  return (
    <>
        <h1>Get all Books</h1>
        <ul>
          {books.map((book) =>  
              <li key={book.id}>
              <h2>{book.title}</h2>
              <h3>Author: {book.author}</h3>
            </li>)}
        </ul>
    </>
  )
}

export default Get