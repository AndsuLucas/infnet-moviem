import {useState} from "react";

function Lists() {
    // Simulando listas de filmes.
    // @todo Implementar listas personalizadas.
    const [lists, setLists] = useState([
        { id: 1, name: 'Favoritos', movies: ['Inception', 'The Matrix'] },
        { id: 2, name: 'Para Assistir', movies: ['Interstellar', 'The Prestige'] },
    ]);

    return (
        <div>
            <h2>Minhas Listas</h2>
            {lists.map(list => (
                <div key={list.id} className="list-item">
                    <h3>{list.name}</h3>
                    <ul>
                        {list.movies.map((movie, index) => (
                            <li key={index}>{movie}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Lists;
