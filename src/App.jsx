import { Outlet } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <footer className="footer">
                <p>&copy; 2024 Plataforma de Recomendação de Filmes</p>
            </footer>
        </>
    );
}

export default App;
