import { useEffect, useState, createContext } from 'react';

const BooksContext = createContext();

function Books({ children }) {
 const [books, setBooks] = useState([])

useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => setBooks(data))
},[])

function CreateBooks(bookInfo){
 fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(bookInfo)
 })
 .then(response => response.json())
 .then(data => setBooks([...books, data])) 
}

function UpdateBooks(id, bookInfo) {
 fetch(`http://localhost:3000/books/${id}`, {
    method: "PUT",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(bookInfo)
 })
 .then(response => response.json())
 .then(data => setBooks([...books, data]))
}

function DeleteBooks(id) {
 fetch(`http://localhost:3000/books/${id}`,{
   method: "DELETE",
})
.then(response => response.json())
.then(() =>setBooks(books.filter(book => book.id !== id)))

}

  return (
      <BooksContext.Provider 
       value={{books, CreateBooks, UpdateBooks, DeleteBooks}}>
        {children}
      </BooksContext.Provider>
  )
}

export default Books;
export { BooksContext }
