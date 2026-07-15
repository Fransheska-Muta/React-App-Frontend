// import React from 'react'

import { BooksContext } from "../context/Books"
import { useContext } from "react"

function Get() {
  const { books } = useContext(BooksContext)

  return (
    <>
        <h1>Get all Books</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
            </li>
          ))}
        </ul>
    </>
  )
}

export default Get
