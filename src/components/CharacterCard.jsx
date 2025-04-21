const CharacterCard = ({ character }) => {
    return (
      <div className="card">
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Especie: {character.species}</p>
      </div>
    );
  };
  
  export default CharacterCard;
  