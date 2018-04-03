import characters_json from '../data/characters.json';


/* find: allow us to map over each element
*  in our characters json one at the time and 
*  return the one that matches with the id that 
*  we pass. */
export const createCharacter = (id) =>{
	let character = characters_json.find(c => c.id === id); // c : characters
	return character;
}


