import {useState} from "react";

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Com mocks por enquanto.
        // @todo Implementar chamada à API de filmes.
        const mockResults = [
            { id: 1, title: 'Inception', genre: 'Sci-Fi' },
            { id: 2, title: 'The Matrix', genre: 'Sci-Fi' },
            { id: 3, title: 'Interstellar', genre: 'Sci-Fi' },
            { id: 4, title: 'The Prestige', genre: 'Drama' },
        ];
        setResults(
            mockResults.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    return (
        <div>
            <h2>Buscar Filmes por Título</h2>
            <input
                type="text"
                className="input"
                placeholder="Digite o nome do filme..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button className="button" onClick={handleSearch}>
                Buscar
            </button>
            <div>
                {results.length > 0 ? (
                    results.map(movie => (
                        <div key={movie.id} className="list-item">
                            <strong>{movie.title}</strong> - {movie.genre}
                        </div>
                    ))
                ) : (
                    <p>Nenhum filme encontrado.</p>
                )}
            </div>
        </div>
    );
}

export default Search;
