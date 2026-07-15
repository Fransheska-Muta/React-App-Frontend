import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from "./context/Books"
import Navbar from "./components/Navbar"
import "./App.css"
import Get from "./components/Get";
import Create from "./components/Create";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {

  return (
    <BrowserRouter>
      <Books>
         <Navbar />
         <Routes>
            <Route path="/" element={<Get />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Update" element={<Update />} />
            <Route path="/Delete" element={<Delete />} /> 
         </Routes>
      </Books>
    </BrowserRouter>
  )
}

export default App
