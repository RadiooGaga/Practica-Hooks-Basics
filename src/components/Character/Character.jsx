import './Character.css'
import { useEffect, useState } from "react";

const Peticion = () => {

    const [characters, setCharacters] = useState([]);
    const [rotatedCharacterId, setRotatedCharacterId] = useState(false);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((res) => res.json())
        .then((data) => setCharacters(data.results));
    }, []);
   
    const clickOnImage = (id) => {
      setRotatedCharacterId(rotatedCharacterId === id ? false : id); 
      /* si es igual a id, la imagen ya está rotada. Si ya está rotada, el siguiente click 
      volverá la imagen al estado inicial*/
    };

    return ( 
        <div className='charactersContainer'>
            {characters.map((character) => (
                <div className='characterCard' key={character.id}>
                    <img 
                        className={`imgCharacter ${rotatedCharacterId === character.id ? 'rotated' : ''}`}
                        src={character.image} 
                        alt={character.name}
                        onClick={() => clickOnImage(character.id)} 
                    />
                    <div className='characterDetails'>
                        <h2>{character.name}</h2>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Origin: {character.origin.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Peticion;

