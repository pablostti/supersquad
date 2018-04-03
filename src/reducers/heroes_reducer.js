import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';


/* Update the array by inserting 
*  character from createCharacter 
*  Build an array of all the objects in our current
*  c array. */
const heroes = (state = [], action) =>{
	switch(action.type){
		case ADD_CHARACTER:
			let heroes = [...state, createCharacter(action.id)];  /* spread operator : put all properties of the object
			*													   * from array element	into the new array with the same properties */	 
			return heroes;
		case REMOVE_CHARACTER:
			heroes = state.filter(item => item.id !== action.id); // action.id (we pass as parameter)
			return heroes;										 			
		default:
			return state;
	}
}


export default heroes;