import './Character.css'
import { useEffect, useState } from "react";

const Peticion = () => {

    const [characters, setCharacters] = useState([]);
    const [rotatedCharacters, setRotatedCharacters] = useState(false);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => setCharacters(data.results));
    }, []);
   
    const clickOnImage = (id) => {
      setRotatedCharacters(id);
    };

    return ( 
    
    <div className='charactersContainer'>
        {console.log(characters)}
        {characters.map((character) => (
            <img className={`imgCharacter ${rotatedCharacters === character.id ? 'rotated' : ''}`}
            key={character.id} 
            src={character.image} 
            onClick={() => clickOnImage(character.id)} 
            />
            ))}

    </div>
    );
}

export default Peticion;

