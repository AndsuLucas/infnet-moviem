import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/search">
                Buscar
            </NavLink>
            <NavLink to="/lists">
                Listas
            </NavLink>
        </nav>
    );
}

export default Navbar;
