import { Link } from 'react'

function Navbar() {
    return (
        <nav>
            <Link to="/">Get Books</Link>
            <Link to="/my-react-app/src/components/Create.jsx">Create a Book</Link>
            <Link to="/my-react-app/src/components/Delete.jsx">Delete a Book</Link>
            <Link to="/my-react-app/src/components/Update.jsx">Update a Book</Link>
        </nav>
    )

}

export default Navbar