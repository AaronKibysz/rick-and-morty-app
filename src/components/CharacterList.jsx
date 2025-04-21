import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
      const data = await response.json();

      if (response.ok) {
        setCharacters(data.results);
      } else {
        setCharacters([]);
        setError(data.error || 'No se encontraron personajes.');
      }
    } catch (err) {
      setCharacters([]);
      setError('Error al conectar con la API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <p>Cargando personajes...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="grid">
        {!loading && !error && characters.length > 0 && characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;

