import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Get Books</Link>
            <Link to="/Create">Create a Book</Link>
            <Link to="/Delete">Delete a Book</Link>
            <Link to="/Update">Update a Book</Link>
        </nav>
    )

}

export default Navbar